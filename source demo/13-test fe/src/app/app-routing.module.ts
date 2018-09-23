
import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'twitter',
    pathMatch: 'full'
  },
  {
    path: 'twitter',
    loadChildren: './twitter/twitter.module#TwitterModule'
  }
];