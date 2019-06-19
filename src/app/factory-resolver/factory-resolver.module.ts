import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AFactoryComponent } from './a-factory/a-factory.component';
import { BFactoryComponent } from './b-factory/b-factory.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AFactoryComponent, BFactoryComponent],
  exports: [
    AFactoryComponent,
    BFactoryComponent
  ],
  entryComponents: [
    BFactoryComponent
  ]
})
export class FactoryResolverModule { }
