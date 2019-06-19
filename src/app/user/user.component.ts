import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../admin/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { HelperFunction } from '../share/helper/helper.function';
import { UrlConfig } from '../constants/config/url.config';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  isShow: any = false;
  constructor(
    private dialogLogin: MatDialog,
    private router: Router,
    private helperFunction: HelperFunction
  ) { }

  ngOnInit() {
  }
  openDialogLogin(): void {
    const dialogRef = this.dialogLogin.open(LoginDialogComponent, {
      width: '350px',
    });
  }
  ShowSidebar() {
    this.isShow = !this.isShow;
  }
  Home() {
    this.router.navigate([UrlConfig.CODE]);
  }
}
