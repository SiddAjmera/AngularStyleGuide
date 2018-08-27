import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import { HEROES } from './heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() {
    return from(HEROES);
  }

}
