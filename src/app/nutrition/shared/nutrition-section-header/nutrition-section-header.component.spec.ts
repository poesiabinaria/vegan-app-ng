import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionSectionHeaderComponent } from './nutrition-section-header.component';

describe('NutritionSectionHeaderComponent', () => {
  let component: NutritionSectionHeaderComponent;
  let fixture: ComponentFixture<NutritionSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionSectionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
