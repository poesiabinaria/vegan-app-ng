import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Food } from 'src/app/nutrition/shared/nutrition.model';
import { environment } from 'src/environments/environment';
import { NutritionService } from '../shared/nutrition.service';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.scss'],
})
export class FoodSelectionComponent implements OnInit {
  searchResult$!: Observable<Food[]>;

  userFoodsData: any[] = [];
  userFoodsMetadata: any[] = [];

  showSearchResults: boolean = false;

  searchInput = new FormControl(null);

  constructor(private service: NutritionService, private router: Router) {}

  addFood(food: Food) {
    if (!this.userFoodsData.find((x) => x.food_id == food.food_id)) {
      this.userFoodsData.push(food);
    } else {
      alert('Alimento já adicionado');
    }
  }

  deleteFood(foodId: number) {
    console.log(foodId);
    this.userFoodsData = this.userFoodsData.filter((x) => x.food_id !== foodId);
  }

  saveFoods() {
    this.userFoodsMetadata = this.userFoodsData.map((food) => {
      let userFood = this.userFoodsMetadata.find(
        (x) => x.food_id == food.food_id
      );

      if (!userFood) {
        return {
          food_id: food.food_id,
          qty: 0,
          measure: food.default_measure,
        };
      }

      return userFood;
    });

    this.service
      .updateUserFoodsMetadata(this.userFoodsMetadata, 1)
      .subscribe(() => this.router.navigate(['ajustar-alimentos']));
  }

  ngOnInit(): void {
    this.service
      .getUserFoodsMetadata(1)
      .subscribe((foods: Food[]) => (this.userFoodsMetadata = foods));

    this.service
      .getFoodsByUserId(1)
      .subscribe((foods: any) => (this.userFoodsData = foods));

    this.searchResult$ = this.searchInput.valueChanges.pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 2),
      debounceTime(200),
      distinctUntilChanged(),
      tap((value) => console.log(value)),
      switchMap((value) => this.service.getFoodByName(value))
    );
  }
}
