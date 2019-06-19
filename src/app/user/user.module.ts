import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RoutingModule } from './routing/routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { FactoryResolverModule } from '../factory-resolver/factory-resolver.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormModule } from '../form-module/form.module';
import { CustomMaterialModule } from '../material.module';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { Error404Component } from './error404/error404.component';
import { ChuyenMucComponent } from './chuyen-muc/chuyen-muc.component';
import { ChiTietChuyenMucComponent } from './chuyen-muc/chi-tiet-chuyen-muc/chi-tiet-chuyen-muc.component';
import { PipeModule } from '../share/pipe/module.pipe';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    FactoryResolverModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    CustomMaterialModule,
    PipeModule
  ],
  exports: [
    PipeModule
  ],
  declarations: [UserComponent, UserHomeComponent, SlideBarComponent, Error404Component, ChuyenMucComponent, ChiTietChuyenMucComponent]
})
export class UserModule { }
