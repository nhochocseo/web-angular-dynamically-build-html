import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminHomeComponent } from './blog-admin-home.component';

describe('BlogAdminHomeComponent', () => {
  let component: BlogAdminHomeComponent;
  let fixture: ComponentFixture<BlogAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
