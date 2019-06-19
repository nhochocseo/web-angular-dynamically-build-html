import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dataMenu } from 'src/app/services/dataFace/menu.category.admin.service';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.scss']
})
export class BlogAdminComponent implements OnInit {
    urlBlog = '/admin/blog';
    listMenu: any;
    isUrlClass = '';
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
      this.listMenu = dataMenu;
      console.log("vào blog admin");
  }
  OpenPage(url: string) {
    console.log(url);
    this.isUrlClass = url;
      url = this.urlBlog + '' + url;
    this.router.navigateByUrl(url);
  }
}
