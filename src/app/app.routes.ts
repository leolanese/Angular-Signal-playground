import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => 
      import('./vy-home/vy-home.component')
      .then(c => c.VyHomeComponent)
  },
  {
    path: 'signal',
    loadComponent: () => 
      import('./vy-home/vy-home.component')
      .then(c => c.VyHomeComponent)
  },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
];
