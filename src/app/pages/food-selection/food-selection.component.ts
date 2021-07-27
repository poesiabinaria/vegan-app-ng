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
import { FoodItem } from 'src/app/foods-interface';
import { USERDATA } from 'src/app/user-profile';
import { environment } from 'src/environments/environment';
import { FoodSelectionService } from './food-selection.service';

@Component({
  selector: 'app-food-selection',
  templateUrl: './food-selection.component.html',
  styleUrls: ['./food-selection.component.scss'],
})
export class FoodSelectionComponent implements OnInit {
  userData = USERDATA;

  searchResult$!: Observable<FoodItem[]>;
  //userFoodsResult$!: Observable<FoodItem[]>;

  userFoodsIds: number[] = [];
  userFoods: FoodItem[] = [];

  showSearchResults: boolean = false;

  searchInput = new FormControl(null);

  constructor(private service: FoodSelectionService) {}

  getFoodsUser() {
    this.userFoodsIds = this.userData.foods.map(
      (userFood: FoodItem) => userFood.id
    );
    this.service
      .getFoodById(this.userFoodsIds)
      .subscribe((foodResults) =>
        foodResults.map((food) => this.userFoods.push(food))
      );
  }

  addFood(food: FoodItem) {
    if (!this.userFoods.find((x) => x.id == food.id)) {
      this.userFoods.push(food);
      this.userData.foods.push({ id: food.id, qty: 0, measure: 'g' });
    } else {
      alert('Alimento já adicionado');
    }
  }

  deleteFood(id: number) {
    this.userFoods = this.userFoods.filter((x) => x.id !== id);
    this.userData.foods = this.userData.foods.filter((x: any) => x.id !== id);
  }

  ngOnInit(): void {
    this.getFoodsUser();

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
