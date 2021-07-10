import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNutritionComponent } from './section-nutrition.component';

describe('SectionNutritionComponent', () => {
  let component: SectionNutritionComponent;
  let fixture: ComponentFixture<SectionNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
