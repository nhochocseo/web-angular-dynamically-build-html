import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { dataPost } from 'src/app/services/dataFace/newpost.service';
import { dataCategory } from 'src/app/services/dataFace/category.service';
import { UrlConfig } from 'src/app/constants/config/url.config';

@Component({
  selector: 'app-chi-tiet-chuyen-muc',
  templateUrl: './chi-tiet-chuyen-muc.component.html',
  styleUrls: ['./chi-tiet-chuyen-muc.component.scss']
})
export class ChiTietChuyenMucComponent implements OnInit , OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  chiTietChuyenMuc: any;
  baiVienLienQuan: any;
  category: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private helperFunction: HelperFunction,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['chuoiTieuDe']) {
        const id = this.helperFunction.getIdUrl(params['chuoiTieuDe']);
        if (id) {
          this.GetPostById(id);
          this.BaiVietLienQuan(id);
        } else {
          this.router.navigate(['/404']);
        }
      }
    });
  }

  GetPostById(id: number) {
    this.chiTietChuyenMuc = dataPost.find(res => res.id == id);
    this.helperFunction.setTitle(this.chiTietChuyenMuc.name);
    this.GetCategoryById(this.chiTietChuyenMuc.idCategory);
  }
  GetCategoryById(id: any) {
    this.category = dataCategory.find(res => res.id == id);
  }
  BaiVietLienQuan(id: number) {
    this.baiVienLienQuan = dataPost.filter(res => {
      return res.id != id && res.idCategory == this.chiTietChuyenMuc.idCategory;
    });
  }
  ChiTiet(data: any) {
    this.router.navigate([UrlConfig.CODE, this.helperFunction.change_alias(data.name) + '_' + data.id]);
  }
  ViewCategory(url: string) {
    this.router.navigate([UrlConfig.CHUYEN_MUC_CODE, url]);
  }
  ViewChuyenMuc() {
    this.router.navigate([UrlConfig.CHUYEN_MUC_CODE]);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
