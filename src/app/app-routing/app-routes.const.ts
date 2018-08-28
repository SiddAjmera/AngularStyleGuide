import { Routes } from '@angular/router';

import { HeroesComponent } from './../heroes/heroes.component';
import { NavComponent } from './../core/components/nav/nav.component';

export const APP_ROUTES: Routes = [
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: '**',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];