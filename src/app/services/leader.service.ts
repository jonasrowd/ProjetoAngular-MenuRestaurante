import { BaseURL } from './../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Leader } from "../shared/leader";

@Injectable({
  providedIn: "root",
})
export class LeaderService {
  constructor(private http: HttpClient, private processHttpMsgService: ProcessHTTPMsgService) {}

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(BaseURL + 'leadership')
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(BaseURL + 'leadership/' + id)
    .pipe(catchError(this.processHttpMsgService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader[]>(BaseURL + 'leadership?featured=true')
    .pipe(map(leader => leader[0]))
    .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
