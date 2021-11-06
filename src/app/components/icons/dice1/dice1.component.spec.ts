import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dice1Component } from './dice1.component';

describe('Dice1Component', () => {
  let component: Dice1Component;
  let fixture: ComponentFixture<Dice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
