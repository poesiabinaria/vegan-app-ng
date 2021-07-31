import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
import { USERDATA } from 'src/app/mock-user-profile';
import { environment } from 'src/environments/environment';
import { NutritionService } from '../shared/nutrition.service';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.scss'],
})
export class FoodSelectionComponent implements OnInit {
  userData = USERDATA;

  searchResult$!: Observable<Food[]>;
  //userFoodsResult$!: Observable<Food[]>;

  userFoodsIds: number[] = [];
  userFoods: any[] = [];

  showSearchResults: boolean = false;

  searchInput = new FormControl(null);

  constructor(private service: NutritionService) {}

  add(food: Food) {
    if (!this.userFoods.find((x) => x.id == food.id)) {
      this.service
        .addFood({ id: food.id, qty: 0, measure: 'g' }, 1)
        .subscribe(() => {
          this.userFoods.push(food);
          console.log(this.userFoods);
        });
    } else {
      alert('Alimento já adicionado');
    }
  }

  delete(foodId: number) {
    this.service.deleteFood(foodId).subscribe(() => {
      this.userFoods = this.userFoods.filter((x) => x.id !== foodId);
    });
  }

  ngOnInit(): void {
    this.service
      .getFoodsByUserId(1)
      .subscribe((foods: Food[]) => (this.userFoods = foods));

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
