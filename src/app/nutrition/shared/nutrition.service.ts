import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Food } from 'src/app/nutrition/shared/nutrition.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  readonly BASE_URL = `${environment.API}/users`;
  readonly FOODS_URL = `${environment.API}/foods`;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getUserFoodsMetadata(userId: number) {
    return this.http.get<any>(`${this.BASE_URL}/${userId}/foods`);
  }

  updateUserFoodsMetadata(userFoodsMetadata: any, userId: number) {
    console.log(userFoodsMetadata);
    return this.http.patch<Food[]>(`${this.BASE_URL}/${userId}/foods/`, {
      foods_metadata: userFoodsMetadata,
    });
  }

  // getUserValues(userId: number) {
  //   return this.http.get<any[]>(`${this.BASE_URL}/${userId}/values`);
  // }

  // updateUserValues(values: any, userId: number) {
  //   console.log('here: ', values, userId);
  //   return this.http.patch<any[]>(`${this.BASE_URL}/${userId}/values/`, {
  //     values,
  //   });
  // }

  getFoodsByUserId(userId: number) {
    return this.getUserFoodsMetadata(userId).pipe(
      map((foodsMetadata: any) =>
        foodsMetadata.map((food: any) => food.food_id)
      ),
      mergeMap((foodsId) => {
        // GET BETTER!
        let filters = new HttpParams();
        filters = filters.append('foods_id', foodsId.join(','));

        return this.http.get<Food[]>(this.FOODS_URL, {
          params: filters,
        });
      })
    );
  }

  // getFoodsByUserId(userId: number) {
  //   let foodsMetadataTemp: any = [];

  //   return this.http.get<any>(`${this.BASE_URL}/${userId}/foods`).pipe(
  //     map((foodsMetadata: any) => {
  //       foodsMetadataTemp = foodsMetadata;
  //       return foodsMetadata.map((food: any) => food.food_id);
  //     }),
  //     mergeMap((foodsId: any) => {
  //       let filters = new HttpParams();
  //       filters = filters.append('foods_id', foodsId.join(','));
  //       return this.http.get<any>(this.FOODS_URL, { params: filters });
  //     }),
  //     map((foodsData: any) => {
  //       console.log('foodsData', foodsData);

  //       return foodsData.reduce((result: any, foodData: any) => {
  //         let foodMeta = foodsMetadataTemp.find(
  //           (foodMetadata: any) => foodMetadata.food_id === foodData.food_id
  //         );

  //         result.push({ ...foodMeta, foodData });

  //         return result;
  //       }, []);
  //     })
  //   );

  // }

  getFoodByName(foodName: string) {
    return this.http.get<Food[]>(this.FOODS_URL, {
      params: { food_name: foodName },
    });
  }
}
