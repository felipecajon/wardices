import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dice5Component } from './dice5.component';

describe('Dice5Component', () => {
  let component: Dice5Component;
  let fixture: ComponentFixture<Dice5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dice5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dice5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
