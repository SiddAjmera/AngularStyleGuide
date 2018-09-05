import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { Hero } from './hero.model';
import { HEROES } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return from([HEROES]);
  }

}
