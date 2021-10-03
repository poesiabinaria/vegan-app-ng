import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AccountService } from 'src/app/core/account/shared/account.service';
import {
  FoodMetadata,
  FoodData,
} from 'src/app/nutrition/shared/nutrition.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  readonly USERS_URL = `${environment.API}/users`;
  readonly FOODS_URL = `${environment.API}/foods`;

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  getUserFoodsMetadata() {
    const userId = this.accountService.getCurrentUserId();
    return this.http.get<FoodMetadata[]>(`${this.USERS_URL}/${userId}/foods`);
  }

  updateUserFoodsMetadata(userFoodsMetadata: any) {
    const userId = this.accountService.getCurrentUserId();
    return this.http.put<FoodMetadata[]>(`${this.USERS_URL}/${userId}/foods/`, {
      foods_metadata: userFoodsMetadata,
    });
  }

  geUserFoods() {
    return this.getUserFoodsMetadata().pipe(
      map((foodsMetadata: any) => foodsMetadata.map((food: any) => food.id)),
      mergeMap((foodsId) => {
        if (foodsId.length) {
          let filters = new HttpParams();
          filters = filters.append('foods_id', foodsId.join(','));

          return this.http.get<FoodData[]>(this.FOODS_URL, { params: filters });
        }
        return [];
      })
    );
  }

  getFoodByName(foodName: string) {
    return this.http.get<FoodData>(this.FOODS_URL, {
      params: { food_name: foodName },
    });
  }
}
