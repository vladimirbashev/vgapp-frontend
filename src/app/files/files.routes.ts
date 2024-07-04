import { Routes } from '@angular/router';
import {provideState} from "@ngrx/store";
import {filesFeature} from "./store/files.reducers";
import {provideEffects} from "@ngrx/effects";
import * as filesEffects from './store/effects/files.effects';


export const routes: Routes = [
  {
    providers: [provideState(filesFeature),  provideEffects([filesEffects])],
    path: '',
    loadComponent: () => import('./components/files/files.component').then(mod => mod.FilesComponent)
  },
];
