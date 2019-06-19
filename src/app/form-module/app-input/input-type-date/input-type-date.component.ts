import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-type-date',
  templateUrl: './input-type-date.component.html',
  styleUrls: ['./input-type-date.component.css']
})
export class InputTypeDateComponent implements OnInit {
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
    if (!data) return;
    if (data.placeholder) {
      this.placeholder = data.placeholder;
    }
  }

  ngOnInit(): void {
  }
}
