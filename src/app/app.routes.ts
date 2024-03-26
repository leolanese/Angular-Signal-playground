import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => 
      import('./vy-home/vy-home.component')
      .then(c => c.VyHomeComponent),
    children: [],

  },
  {
    path: 'outlet1Path',
    loadComponent: () => 
      import('./vy-side/vy-side.component')
      .then(c => c.VySideComponent),
    children: [],
    outlet: 'outlet1Router'
    },

  {
    path: 'outlet2path',
    loadComponent: () => 
      import('./vy-side/vy-side.component')
      .then(c => c.VySideComponent),
    children: [],
    outlet: 'outlet2Router'
    },  

  { path: '**', component: PageNotFoundComponent }
];
