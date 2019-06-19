import { Component, OnInit } from '@angular/core';
import { dataPost } from 'src/app/services/dataFace/newpost.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { dataCategory } from 'src/app/services/dataFace/category.service';
import { UrlConfig } from 'src/app/constants/config/url.config';

@Component({
  selector: 'app-chuyen-muc',
  templateUrl: './chuyen-muc.component.html',
  styleUrls: ['./chuyen-muc.component.scss']
})
export class ChuyenMucComponent implements OnInit {
  listPost: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private helperFunction: HelperFunction,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeRoute.params.pipe(takeUntil(this.destroy$)).subscribe(params => {
      if (params['chuyenMucCon']) {
        const category = dataCategory.find(res => res.url == params['chuyenMucCon']);
        if (category) {
          console.log(category);
          this.LoadPostByCategoryId(category.id);
        } else {
          this.LoadPost();
        }
      } else  {
        this.LoadPost();
      }
    });
    console.log(this.listPost);
  }
  LoadPost() {
    this.listPost = dataPost;
  }
  LoadPostByCategoryId(categoryId: number) {
    this.listPost = dataPost.filter(res => res.idCategory == categoryId);
  }
  ChiTiet(data: any) {
    this.router.navigate([UrlConfig.CODE, this.helperFunction.change_alias(data.name) + '_' + data.id]);
  }
}
