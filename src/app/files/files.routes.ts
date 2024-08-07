import { Routes } from '@angular/router';
import {provideState} from "@ngrx/store";
import {filesFeature} from "./store/files.reducers";
import {provideEffects} from "@ngrx/effects";
import * as getFilesEffects from './store/effects/getFiles.effects';
import * as postFilesEffects from './store/effects/postFiles.effects';
import * as deleteFilesEffects from './store/effects/deleteFiles.effects';

export const routes: Routes = [
  {
    providers: [provideState(filesFeature),  provideEffects([getFilesEffects, postFilesEffects, deleteFilesEffects])],
    path: '',
    loadComponent: () => import('./components/files/files.component').then(mod => mod.FilesComponent)
  },
];
