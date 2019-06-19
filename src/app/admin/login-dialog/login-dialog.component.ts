import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  LoginForm: FormGroup ;
  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.LoginForm = this.fb.group({
      user: [''],
      password: ['']
    });
  }
  OnDestroy() {
  }
  OnSubmit() {
    // console.log(this.LoginForm);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
