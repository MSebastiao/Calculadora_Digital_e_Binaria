import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalHexComponent } from './cal-hex.component';

describe('CalHexComponent', () => {
  let component: CalHexComponent;
  let fixture: ComponentFixture<CalHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalHexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
