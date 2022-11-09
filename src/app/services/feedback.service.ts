import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseURL } from './../shared/baseurl';
import { Feedback } from './../shared/feedback';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

constructor(private http: HttpClient, private processHttpMsgService: ProcessHTTPMsgService) { }

  /** POST: add a new hero to the database */
  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  
    return this.http.post<Feedback>(BaseURL+'feedback', feedback, httpOptions)
    .pipe(
      catchError(this.processHttpMsgService.handleError));
  }


}
