import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCalculationComponent } from './food-calculation.component';

describe('FoodCalculationComponent', () => {
  let component: FoodCalculationComponent;
  let fixture: ComponentFixture<FoodCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
