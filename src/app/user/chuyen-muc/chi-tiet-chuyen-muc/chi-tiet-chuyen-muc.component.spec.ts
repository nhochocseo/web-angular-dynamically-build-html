import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietChuyenMucComponent } from './chi-tiet-chuyen-muc.component';

describe('ChiTietChuyenMucComponent', () => {
  let component: ChiTietChuyenMucComponent;
  let fixture: ComponentFixture<ChiTietChuyenMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietChuyenMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietChuyenMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
