import { Routes } from '@angular/router';


export const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.routes').then(r => r.routes),
  // },
  {
    path: 'register',
    loadComponent: () => import('./auth/components/register/register.component').then(mod => mod.RegisterComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/components/login/login.component').then(mod => mod.LoginComponent)
  }
];
