import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dice3Component } from './dice3.component';

describe('Dice3Component', () => {
  let component: Dice3Component;
  let fixture: ComponentFixture<Dice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
