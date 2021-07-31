import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Food } from 'src/app/nutrition/shared/nutrition.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  //private readonly API = `${environment.API}/foods`;
  readonly FOODS_URL = `${environment.API}/foods`;
  readonly USERDATA_URL = `${environment.API}/usersFoods`;
  constructor(private http: HttpClient) {}

  getFoodByName(foodName: string) {
    return this.http.get<Food[]>(this.FOODS_URL, {
      params: { name_like: foodName },
    });
  }

  addFood(foodInfo: any, userId: number) {
    console.log(foodInfo);
    return this.http.post<Food[]>(this.USERDATA_URL, {
      ...foodInfo,
      userId,
    });
  }

  deleteFood(foodId: number) {
    return this.http.delete<Food[]>(`${this.USERDATA_URL}/${foodId}`);
  }

  getFoodsByUserId(userId: number) {
    return this.http.get<any>(this.USERDATA_URL, { params: { userId } }).pipe(
      map((foodsInfo: any) => foodsInfo.map((food: any) => food.id)),
      mergeMap((foodsId) =>
        this.http.get<Food[]>(this.FOODS_URL, {
          params: { id: foodsId },
        })
      )
    );
  }
}
