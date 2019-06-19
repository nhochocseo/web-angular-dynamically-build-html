import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAdminHomeComponent } from './shop-admin-home.component';

describe('ShopAdminHomeComponent', () => {
  let component: ShopAdminHomeComponent;
  let fixture: ComponentFixture<ShopAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
