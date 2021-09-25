import { Component, OnInit, Input } from '@angular/core';
import { forkJoin, Subject, timer } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';

import { FOODS } from '../../../mock-foods';
import { Food } from '../../shared/nutrition.model';
import { NutritionService } from '../../shared/nutrition.service';

@Component({
  selector: 'app-user-foods',
  templateUrl: './user-foods.component.html',
  styleUrls: ['./user-foods.component.scss'],
})
export class UserFoodsComponent implements OnInit {
  @Input() userData: any;

  foodsMetadata: any[] = [];
  foodsData: any[] = [];
  saveStatus: string = '';

  saveUserData$: Subject<any> = new Subject();

  // getFoodInfo(id: number): any {
  //   console.log('id:', id);
  //   return this.foodsData.find((x) => x.food_id === id);
  // }

  getFoodValuesBasedOnMeasure(foodValues: any, measure: any): any {
    let measureNumber: number, base: number;
    switch (measure) {
      case 'cs':
        measureNumber = 12;
        base = 1;
        break;
      case 'ch':
        measureNumber = 50;
        base = 1;
        break;
      default:
        measureNumber = 100;
        base = 100;
    }

    const nutrientNames = Object.keys(foodValues);
    const newNutrientValues: any = {};

    nutrientNames.forEach((nutrientName: string) => {
      let nutrientValue = foodValues[nutrientName];
      newNutrientValues[nutrientName] = (nutrientValue * measureNumber) / 100;
    });

    return newNutrientValues;
  }

  updateQty(foodData: any, foodMetadata: any, action: string) {
    if (action === 'add') {
      foodMetadata.qty++;
      this.updateAchievedNeed(foodData.values, foodMetadata.measure, 1);
    } else {
      foodMetadata.qty--;
      this.updateAchievedNeed(foodData.values, foodMetadata.measure, -1);
    }

    console.log('user ', foodMetadata);
    this.saveUserData$.next(this.foodsMetadata);
  }

  updateMeasure(foodData: any, foodMetadata: any, event: any) {
    this.updateAchievedNeed(
      foodData.values,
      foodMetadata.measure,
      -foodMetadata.qty
    );

    foodMetadata.measure = event.target.value;
    foodMetadata.qty = 0;

    this.saveUserData$.next(this.foodsMetadata);
  }

  updateAchievedNeed(foodValues: any, measure: string, multiplier: number) {
    foodValues = this.getFoodValuesBasedOnMeasure(foodValues, measure);

    const updatedValues: any = {};
    const nutrientGroupNames = Object.keys(this.userData.values);

    nutrientGroupNames.forEach((nutrientGroupName: string) => {
      let nutrientValues = Object.entries(
        this.userData.values[nutrientGroupName]
      );
      let temp: any = {};

      nutrientValues.forEach((value: any) => {
        let nutrientName = value[0];
        let dailyNeed = value[1][0];
        let somatory = value[1][1];

        temp[nutrientName] = [
          dailyNeed,
          somatory + foodValues[nutrientName] * multiplier,
        ];
      });

      updatedValues[nutrientGroupName] = temp;
    });

    this.userData.values = updatedValues;
  }

  showSaveTime() {
    this.saveStatus = 'Salvo!';
    timer(3000).subscribe(() => (this.saveStatus = 'Salvo há 3 segundos'));
  }

  initNutritionalValues() {
    this.foodsMetadata.forEach((foodMetadata) => {
      let foodData = this.foodsData.find(
        (foodData: any) => foodData.food_id === foodMetadata.food_id
      );

      this.updateAchievedNeed(
        foodData.values,
        foodMetadata.measure,
        foodMetadata.qty
      );
    });
  }

  constructor(private service: NutritionService) {}

  ngOnInit(): void {
    // this.service
    //   .getUserValues(1)
    //   .subscribe(
    //     (userDataValues: any) => (this.userData.values = userDataValues.values)
    //   );

    this.service.getUserFoodsMetadata(1).subscribe((foods: any[]) => {
      this.foodsMetadata = foods;
      console.log('foodsMetadata: ', this.foodsMetadata);
    });

    this.service.getFoodsByUserId(1).subscribe((foods: any) => {
      this.foodsData = foods;
      this.initNutritionalValues();
      console.log('foodsData: ', this.foodsData);
    });

    this.saveUserData$
      .pipe(
        debounceTime(3000),
        switchMap((value) => this.service.updateUserFoodsMetadata(value, 1))
      )
      .subscribe(
        (val) => {
          console.log('SALVO', val);
          this.showSaveTime();
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
