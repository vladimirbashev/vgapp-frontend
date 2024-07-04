import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/files/files.component').then(mod => mod.FilesComponent)
  },
];
