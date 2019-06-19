import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from 'src/app/admin/login-dialog/login-dialog.component';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { dataPost } from 'src/app/services/dataFace/newpost.service';
import { HelperFunction } from 'src/app/share/helper/helper.function';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  listPost: Array<any>;
  exampleDynamicForm: FormGroup ;
  normalForm: FormGroup;
  options = [
    {
      id: 1,
      value: 'Value 1'
    },
    {
      id: 2,
      value: 'Value 2'
    },
    {
      id: 3,
      value: 'Value 3'
    },
    {
      id: 4,
      value: 'Value 4'
    },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private helperFunction: HelperFunction
  ) { }
  ngOnInit(): void {
    this.helperFunction.setTitle('Trang chủ');

    this.exampleDynamicForm = this.fb.group({
      input: ['', Validators.required],
      select: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.normalForm = this.fb.group({
      input: ['', Validators.required],
    });
    this.normalForm.get('input').valueChanges.subscribe(() => {
    });
    // load bài viết
    this.LoadPost();
  }
  LoadPost() {
    this.listPost = dataPost;
  }
  ChiTiet(data: any) {
    this.router.navigate(['/code/', this.helperFunction.change_alias(data.name) + '_' + data.id]);
  }

}
