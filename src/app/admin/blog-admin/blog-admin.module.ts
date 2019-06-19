import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogAdminHomeComponent } from './blog-admin-home/blog-admin-home.component';
import { BlogAdminRoutingModule } from './routing/blog-admin.routing.module';
import { BlogAdminComponent } from './blog-admin.component';
import { BlogAdminCategoryComponent } from './blog-admin-category/blog-admin-category.component';
import { DynamicFormModule } from 'src/app/form-module/form.module';
import { CustomMaterialModule } from 'src/app/material.module';
import { FactoryResolverModule } from 'src/app/factory-resolver/factory-resolver.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MenuCategoryComponent } from './menu-category/menu-category.component';

@NgModule({
  declarations: [BlogAdminHomeComponent, BlogAdminComponent, BlogAdminCategoryComponent, MenuCategoryComponent],
  imports: [
    CommonModule,
    BlogAdminRoutingModule,
    DynamicFormModule,
    CustomMaterialModule,
    FactoryResolverModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class BlogAdminModule { }
