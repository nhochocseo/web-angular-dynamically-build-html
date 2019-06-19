import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTypePasswordComponent } from './input-type-password.component';

describe('InputTypePasswordComponent', () => {
  let component: InputTypePasswordComponent;
  let fixture: ComponentFixture<InputTypePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTypePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTypePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
