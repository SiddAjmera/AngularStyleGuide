import { Component, OnInit } from '@angular/core';

import { FilterTextService } from '../shared/services/filter-text/filter-text.service';
import { HeroService } from './shared/hero/hero.service';
import { Hero } from './shared/hero/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  filteredHeroes: Hero[];

  constructor(
    private filterService: FilterTextService,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        this.filteredHeroes = this.heroes;
      });
  }

  filterChanged(searchText: string) {
    this.filteredHeroes = this.filterService.filter(searchText, ['id', 'name'], this.heroes);
  }

}
