import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dice6Component } from './dice6.component';

describe('Dice6Component', () => {
  let component: Dice6Component;
  let fixture: ComponentFixture<Dice6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dice6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dice6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
