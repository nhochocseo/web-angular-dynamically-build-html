import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShopAdminComponent } from '../shop-admin.component';
import { ShopAdminHomeComponent } from '../shop-admin-home/shop-admin-home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ShopAdminComponent,
      data: { breadcrumbs: 'Trang chủ' },
      children: [
        {
          path: '',
          component: ShopAdminHomeComponent,
          pathMatch: 'full'
        },
      ]
    },
  ])],
  exports: [RouterModule]
})
export class ShopAdminRoutingModule { }
