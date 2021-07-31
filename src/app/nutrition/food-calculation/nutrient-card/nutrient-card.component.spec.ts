import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientCardComponent } from './nutrient-card.component';

describe('NutrientCardComponent', () => {
  let component: NutrientCardComponent;
  let fixture: ComponentFixture<NutrientCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutrientCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
