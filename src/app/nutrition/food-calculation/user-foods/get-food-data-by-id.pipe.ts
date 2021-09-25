import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFoodDataById',
})
export class GetFoodDataByIdPipe implements PipeTransform {
  transform(foodsData: any[], foodId: number): any {
    return foodsData.find((x: any) => x.food_id === foodId);
  }
}
