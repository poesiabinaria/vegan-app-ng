import { TestBed } from '@angular/core/testing';

import { FoodSelectionService } from './food-selection.service';

describe('FoodSelectionService', () => {
  let service: FoodSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
