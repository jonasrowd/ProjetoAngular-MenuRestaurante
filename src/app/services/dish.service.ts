import { HttpClient } from '@angular/common/http';
import { BaseURL } from './../shared/baseurl';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Dish } from "../shared/dish";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) {  

  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(BaseURL + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(BaseURL + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(BaseURL + 'dishes?featured=true')
    .pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }

  // getDishes(): Observable<Dish[]> {
  //   return of (DISHES).pipe(delay(1000));
  // }

  // getDish(id: string): Observable<Dish> {
  //   return of (DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(1000));
  // }

  // getFeaturedDish(): Observable<Dish> {
  //   return  of (DISHES.filter((dish) => dish.featured)[0]).pipe(delay(1000));
  // }

  // getDishIds(): Observable<string[] | any> {
  //   return of(DISHES.map(dish => dish.id)).pipe(delay(1000));
  // }
}
