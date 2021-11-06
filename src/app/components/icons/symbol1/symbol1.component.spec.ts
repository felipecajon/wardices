import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Symbol1Component } from './symbol1.component';

describe('Symbol1Component', () => {
  let component: Symbol1Component;
  let fixture: ComponentFixture<Symbol1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Symbol1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Symbol1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
