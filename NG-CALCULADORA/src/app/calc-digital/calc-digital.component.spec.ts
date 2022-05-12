import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcDigitalComponent } from './calc-digital.component';

describe('CalcDigitalComponent', () => {
  let component: CalcDigitalComponent;
  let fixture: ComponentFixture<CalcDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
