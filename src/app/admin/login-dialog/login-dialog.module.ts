import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from 'src/app/material.module';
import { LoginDialogComponent } from './login-dialog.component';
import { FactoryResolverModule } from 'src/app/factory-resolver/factory-resolver.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormModule } from 'src/app/form-module/form.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    FactoryResolverModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    CustomMaterialModule,
  ],
  declarations: [
    LoginDialogComponent,
  ],
  entryComponents: [
    LoginDialogComponent,
  ],
  exports: [
  ]
})
export class LoginDialogModule { }
