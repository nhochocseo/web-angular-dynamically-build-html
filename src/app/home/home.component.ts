import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeAppComponent implements OnInit {
  listMenu: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  selected: any = {};
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getListMenu();
  }
  getListMenu() {
    this.homeService.getListDanhMuc().pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listMenu = res;
    });
  }
  select(type, item, $event) {
    this.selected[type] = (this.selected[type] === item ? null : item);
    // tslint:disable-next-line:no-unused-expression
    $event ? $event.stopPropagation() : null;
  }
  isActive(type, item) {
    return this.selected[type] === item;
  }
}
