import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSelectionComponent } from './food-selection.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('FoodSelectionComponent', () => {
  let component: FoodSelectionComponent;
  let fixture: ComponentFixture<FoodSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [FoodSelectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove a food', () => {
    component.i = 10;
    expect(component.i).toBe(10);
  });
});
