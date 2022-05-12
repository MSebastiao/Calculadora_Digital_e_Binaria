import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBinariaComponent } from './calc-binaria.component';

describe('CalcBinariaComponent', () => {
  let component: CalcBinariaComponent;
  let fixture: ComponentFixture<CalcBinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcBinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcBinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
