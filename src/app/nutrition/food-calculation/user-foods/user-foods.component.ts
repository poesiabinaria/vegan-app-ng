import { Component, OnInit, Input } from '@angular/core';

import { FOODS } from '../../../mock-foods';

@Component({
  selector: 'app-user-foods',
  templateUrl: './user-foods.component.html',
  styleUrls: ['./user-foods.component.scss'],
})
export class UserFoodsComponent implements OnInit {
  @Input() userData: any;

  foodsDB = FOODS;

  getFoodInfo(id: number): any {
    return this.foodsDB.find((x) => x.id === id);
  }

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

  updateQty(itemFoodBase: any, itemFoodUser: any, action: string) {
    if (action === 'add') {
      itemFoodUser.qty++;
      this.updateAchievedNeed(itemFoodBase.values, itemFoodUser.measure, 1);
    } else {
      itemFoodUser.qty--;
      this.updateAchievedNeed(itemFoodBase.values, itemFoodUser.measure, -1);
    }

    console.log('user ', itemFoodUser);
  }

  updateMeasure(itemFoodBase: any, itemFoodUser: any, event: any) {
    this.updateAchievedNeed(
      itemFoodBase.values,
      itemFoodUser.measure,
      -itemFoodUser.qty
    );

    itemFoodUser.measure = event.target.value;
    itemFoodUser.qty = 0;
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

    console.log(updatedValues);

    this.userData.values = updatedValues;
  }

  constructor() {}

  ngOnInit(): void {}
}
