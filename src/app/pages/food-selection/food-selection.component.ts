import { Component, OnInit } from '@angular/core';

import { FOODS } from '../../mock-foods';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.scss'],
})
export class FoodSelectionComponent implements OnInit {
  foodsDB = FOODS;

  constructor() {}

  ngOnInit(): void {}
}
