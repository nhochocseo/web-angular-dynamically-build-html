import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
  ChangeDetectionStrategy,
  ComponentRef,
  Injector,
  Output,
  EventEmitter,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, FormGroup, ControlContainer } from '@angular/forms';
import { DynamicInputService } from './app-input.service';
import { MESSAGE_VALIDATION, MESSAGE_VALIDATION_RULE } from '../message.validation';
import { InputTypeBase } from './input-type.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInputComponent),
      multi: true
    }
  ]
})
export class AppInputComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnDestroy {
  // only have one type
  @Output() blur = new EventEmitter<any>();
  @ViewChild('inputElement', { read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: ComponentRef<any>;
  @Input() placeholder: '';
  @Input() label: string;
  @Input() formControl: AbstractControl;
  @Input() errorMessages: any;
  @Input() type: any = 'text';
  @Input() needCheckValueChange = false;
  @Input() valueName = 'sname';
  @Input() valueType = 'sid';
  @Input() readonly = false;
  @Output() getConTrolValidValue: EventEmitter<any> = new EventEmitter;
  _data: any = {};
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input()
  get data() {
    return this._data;
  }
  set data(data: any) {
    this._data = data;
    this.initDataForChild(data);
  }

  @Input()
  formControlName: string;

  errorMsg: '';

  _onChange: any;
  _onTouched: any;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _resolver: ComponentFactoryResolver,
    private _helper: DynamicInputService,
    private _controlContainer: ControlContainer,
    private _injector: Injector,
  ) { }

  writeValue(value: any): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'value', value);
  }
  get ngControl() {
    return this._injector.get(NgControl);
  }
  @HostListener('change') change($event) {
    if ($event && $event.target) {
      this._onChange($event.target.value);
    }
  }

  // Allows Angular to register a function to call when the model changes.
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  @HostListener('focusout') onBlur() {
    this._onTouched();
    this.blur.emit();
  }

  // Allows Angular to register a function to call when the input has been touched.
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  ngOnInit(): void {
    // console.log(this.valueName);
    if (this._controlContainer && this.formControlName) {
      this.formControl = this._controlContainer.control.get(this.formControlName);
    }
  }

  ngAfterViewInit(): void {
    this.createInputComponent(this.entry);
    if (this.needCheckValueChange) {
      this.ngControl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(
        (value) => {
          this.getConTrolValidValue.emit(value);
        });
    }
  }

  // Tạo input chung
  createInputComponent(entry) {
    entry.clear();
    const component = this._helper.getInputComponentByType(this.type);
    if (!component) {
      alert('error');
    }
    const factory = this._resolver.resolveComponentFactory(component);
    this.componentRef = entry.createComponent(factory);
    // truyen data vào input
    (<InputTypeBase<any>>this.componentRef.instance).formControlInput = this.formControl;
    this.componentRef.instance.valueName = this.valueName;
    this.componentRef.instance.valueType = this.valueType;
    this.componentRef.instance.readonly = this.readonly;
    this.initDataForChild(this.data);
    // https://angular.io/api/core/ChangeDetectorRef
    this.componentRef.changeDetectorRef.detectChanges();
  }

  initDataForChild(data: any) {
    // console.log(data);
    if (this.componentRef && data) {
      data.placeholder = this.placeholder;
      (<InputTypeBase<any>>this.componentRef.instance).data = data;
    }
  }

  checkRequired() {
    if (!this.formControl) { return false; }
    const abstractControl = this.formControl;
    if (abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }

    return false;
  }

  checkError() {
    if (!this.formControl) { return false; }

    const control = this.formControl;
    if (control.errors && (control.touched || control.dirty)) {
      // set active error
      this.errorMsg = this.getErrorMsg(control.errors);

      return true;
    }

    this.errorMsg = '';
    return false;
  }

  getErrorMsg(errors) {
    if (!this.formControl) { return ''; }

    let rule;
    const nameControl = this.getNameControl();

    for (const key in errors) {
      if (errors[key]) {
        rule = key;
        break;
      }
    }
    // console.log(nameControl);

    if (this.errorMessages && this.errorMessages[rule]) {
      return this.errorMessages[rule];
    }

    if (this.errorMessages && this.errorMessages[nameControl] && this.errorMessages[nameControl][rule]) {
      return this.errorMessages[nameControl][rule];
    }

    if (MESSAGE_VALIDATION[nameControl] && MESSAGE_VALIDATION[nameControl][rule]) {
      return  MESSAGE_VALIDATION[nameControl][rule];
    }

    // by rule
    if (MESSAGE_VALIDATION_RULE[rule]) {
      return  MESSAGE_VALIDATION_RULE[rule];
    }
    return 'chưa định nghĩa msg: ' + nameControl + '|' + rule;
  }

  getNameControl() {
    if (this.formControlName) {
      return this.formControlName;
    }
    let controlName = null;
    const parent = this.formControl.parent;
    // only such parent, which is FormGroup, has a dictionary
    // with control-names as a key and a form-control as a value
    if (parent instanceof FormGroup) {
      for (const key of Object.keys(parent.controls)) {
        if (this.formControl === parent.controls[key]) {
            // both are same: control passed to Validator
            //  and this child - are the same references
            controlName = key;
            break;
        }
      }
    }
    // we either found a name or simply return null
    return controlName;
  }

  ngOnDestroy(): void {
    if (this.entry) {
      this.entry.clear();
    }
    this.componentRef.destroy();
  }
}
