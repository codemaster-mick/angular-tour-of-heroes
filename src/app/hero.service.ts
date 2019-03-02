import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

// Returns an Observable array of Hero data
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
