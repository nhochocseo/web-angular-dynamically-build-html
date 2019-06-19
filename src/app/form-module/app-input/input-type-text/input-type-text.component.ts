import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDataText, InputTypeBase } from '../input-type.interface';

@Component({
  selector: 'input-type-text',
  templateUrl: './input-type-text.component.html',
  styleUrls: ['./input-type-text.component.scss'],
})
export class InputTypeTextComponent extends InputTypeBase<IDataText> implements OnInit {
  placeholder: any = '';
  readonly = false;
  _formControlInput: FormControl = new FormControl();
  set formControlInput(control: FormControl) {
    if (control) {
      this._formControlInput = control;
    }
  }

  get formControlInput() {
    return this._formControlInput;
  }

  set data(data) {
    if (!data) { return; }
    if (data.placeholder) {
      this.placeholder = data.placeholder;
    }
  }

  ngOnInit(): void {
  }
}
