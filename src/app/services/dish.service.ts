import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

import { Dish } from "../shared/dish";
import { DISHES } from "../shared/dishes";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of (DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of (DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return  of (DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }
}
