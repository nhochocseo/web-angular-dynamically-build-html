import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopAdminHomeComponent } from './shop-admin-home/shop-admin-home.component';
import { ShopAdminRoutingModule } from './routing/shop-admin-routing.module';
import { ShopAdminComponent } from './shop-admin.component';

@NgModule({
  declarations: [
    ShopAdminHomeComponent,
    ShopAdminComponent
  ],
  imports: [
    CommonModule,
    ShopAdminRoutingModule
  ]
})
export class ShopAdminModule { }
