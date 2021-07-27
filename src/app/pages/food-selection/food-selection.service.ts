import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FoodItem } from 'src/app/foods-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodSelectionService {
  //private readonly API = `${environment.API}/foods`;
  readonly SEARCH_URL = `${environment.API}/foods`;
  constructor(private http: HttpClient) {}

  getFoodByName(value: string) {
    return this.http.get<FoodItem[]>(this.SEARCH_URL, {
      params: { name_like: value },
    });
  }

  getFoodById(id: number[]) {
    return this.http.get<FoodItem[]>(this.SEARCH_URL, {
      params: { id: id },
    });
  }
}
