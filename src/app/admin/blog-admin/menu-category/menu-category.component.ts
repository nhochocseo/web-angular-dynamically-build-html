import { Component, OnInit, ViewChildren, Input, QueryList, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {
  // inputs
  @Input() current: any;
  @Output() data = new EventEmitter<any>();
  ngOnInit(): void {
    // console.log(this.current);
    // console.log(this.hasChildElements());
  }
  /**
   * check whether there are children
   */
  public hasChildElements(): boolean {
    return this.current.hasOwnProperty('ListChild');
  }
  ViewData(data: any) {
    this.data.emit(data);
  }
}
