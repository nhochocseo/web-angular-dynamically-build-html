import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CustomMaterialModule } from '../material.module';
import { ShopRoutingModule } from './routing/shop.routing.module';
import { HomeAppComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    CustomMaterialModule,
  ],
  entryComponents: [
  ],
  declarations: [HomeComponent, HomeAppComponent]
})
export class HomeAppModule { }
