import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-type-select-tow',
  templateUrl: './input-type-select.component.html',
  styleUrls: ['./input-type-select.component.css']
})
export class InputTypeSelectTowComponent {
  placeholder: any = '';
  _formControlInput: FormControl = new FormControl();
  options: Array<any> = [];
  valueName: any;
  valueType: any;
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
    if (data.options) {
      this.options = data.options;
    }
  }
}
