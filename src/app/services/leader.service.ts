import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { delay } from 'rxjs/operators'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return of (LEADERS).pipe(delay(2000)).toPromise();
  }

  getLeader(id: string): Promise<Leader> {
    return of (LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(2000)).toPromise();
  }

  getFeaturedLeader(): Promise<Leader> {
    return of (LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000)).toPromise();
  }
}
