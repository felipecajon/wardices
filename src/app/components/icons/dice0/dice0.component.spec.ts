import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dice0Component } from './dice0.component';

describe('Dice0Component', () => {
  let component: Dice0Component;
  let fixture: ComponentFixture<Dice0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dice0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dice0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
