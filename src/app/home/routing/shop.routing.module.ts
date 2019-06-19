import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { HomeAppComponent } from '../home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: HomeAppComponent,
      data: { breadcrumbs: 'Trang chủ SHop' },
      children: [
        {
          path: '',
          component: HomeComponent,
          pathMatch: 'full'
        },
      ]
    },
    // {
    //   path: '**',
    //   component: ErrorComponent,
    // }
  ])],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
