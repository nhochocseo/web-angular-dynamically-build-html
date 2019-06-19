import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogAdminComponent } from '../blog-admin.component';
import { BlogAdminHomeComponent } from '../blog-admin-home/blog-admin-home.component';
import { BlogAdminCategoryComponent } from '../blog-admin-category/blog-admin-category.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: BlogAdminComponent,
      data: { breadcrumbs: 'Trang chủ' },
      children: [
        {
          path: '',
          component: BlogAdminHomeComponent,
          pathMatch: 'full'
        },
        {
            path: 'category',
            component: BlogAdminCategoryComponent
        }
      ]
    },
  ])],
  exports: [RouterModule]
})
export class BlogAdminRoutingModule { }
