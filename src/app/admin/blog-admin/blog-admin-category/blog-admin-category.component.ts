import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { dataCategory, dataCategoryMenu } from 'src/app/services/dataFace/category.service';
import { groupBy, chain, get, map, find } from 'lodash';
import { HomeService } from 'src/app/services/home/home.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-blog-admin-category',
  templateUrl: './blog-admin-category.component.html',
  styleUrls: ['./blog-admin-category.component.scss']
})
export class BlogAdminCategoryComponent implements OnInit {
  DanhMuc: FormGroup;
  listCategory: any;
  listCategorySelect: any;
  isIdClass: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private helperFunction: HelperFunction,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getListcategory();
    this.DanhMuc = this.fb.group({
      Ten: ['', Validators.required],
      Url: ['', Validators.required],
      IdDanhMucCha: ['', Validators.required]
    });
  }
  getListcategory() {
    // this.listCategorySelect = dataCategory;
    this.homeService.getListDanhMuc().subscribe(res => {
      this.listCategory = res;
      this.listCategorySelect = res;
      console.log(this.listCategorySelect);
    });
  }
  EditCategory(cate: any) {
    this.isIdClass = cate.id;
    this.DanhMuc.patchValue(cate);
  }
  OnChange() {
    this.DanhMuc.controls.Url.setValue(this.helperFunction.change_alias(this.DanhMuc.controls.Ten.value));
  }
  ViewData(event) {
    console.log(event);
  }
  onSubmit() {
    console.log(this.DanhMuc);
  }
}
