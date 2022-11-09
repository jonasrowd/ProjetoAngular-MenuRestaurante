import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseURL } from './../shared/baseurl';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Dish } from "../shared/dish";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient, private processHttpMsgService: ProcessHTTPMsgService) {  

  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(BaseURL + 'dishes')
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>(BaseURL + 'dishes/' + id)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish[]>(BaseURL + 'dishes?featured=true')
    .pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getDishIds(): Observable<number[] | any> {
    return this.getDishes()
    .pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error => error));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<Dish>(BaseURL + 'dishes/' + dish.id, dish, httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleError));

  }
}
