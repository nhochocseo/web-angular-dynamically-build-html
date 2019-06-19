import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputTypeBase, IDataText } from '../input-type.interface';

@Component({
  selector: 'app-input-type-password',
  templateUrl: './input-type-password.component.html',
  styleUrls: ['./input-type-password.component.css']
})
export class InputTypePasswordComponent extends InputTypeBase<IDataText> implements OnInit {

  placeholder: any = '';
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
