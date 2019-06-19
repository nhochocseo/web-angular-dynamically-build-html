import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { Error404Component } from '../error404/error404.component';
import { ChuyenMucComponent } from '../chuyen-muc/chuyen-muc.component';
import { ChiTietChuyenMucComponent } from '../chuyen-muc/chi-tiet-chuyen-muc/chi-tiet-chuyen-muc.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: UserComponent,
      data: { breadcrumbs: 'Trang chủ' },
      children: [
        {
          path: '',
          component: UserHomeComponent,
          pathMatch: 'full'
        },
        {
          path: 'index',
          component: Error404Component,
        },
        {
          path: 'chuyen-muc',
          component: ChuyenMucComponent,
          data: { breadcrumbs: 'Chuyên mục' }
        },
        {
          path: 'chuyen-muc/:chuyenMucCon',
          component: ChuyenMucComponent,
          data: { breadcrumbs: 'Chuyên mục' }
        },
        {
          path: ':chuoiTieuDe',
          component: ChiTietChuyenMucComponent,
        }
      ]
    },
    {
      path: '**',
      component: Error404Component,
    }
  ])],
  exports: [RouterModule]
})
export class RoutingModule { }
