import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelperFunction } from './share/helper/helper.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private helplFunc: HelperFunction
  ) { }
  ngOnInit(): void {
    this.helplFunc.setTitle('Trang chủ');
  }
}
