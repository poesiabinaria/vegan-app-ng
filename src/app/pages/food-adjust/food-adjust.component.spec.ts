import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAdjustComponent } from './food-adjust.component';

describe('FoodAdjustComponent', () => {
  let component: FoodAdjustComponent;
  let fixture: ComponentFixture<FoodAdjustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAdjustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
