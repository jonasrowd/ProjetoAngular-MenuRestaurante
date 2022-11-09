import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Promotion } from "../shared/promotion";
import { BaseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient, private processHttpMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(BaseURL + 'promotions')
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(BaseURL + 'promotions/' + id)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(BaseURL + 'promotions?featured=true')
    .pipe(map(promotion => promotion[0]))
    .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
