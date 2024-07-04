import {createFeatureSelector, createSelector} from '@ngrx/store'
import {FilesStateInterface} from "./files.state";


export const filesFeatureSelector = createFeatureSelector<
  FilesStateInterface
>('files')

export const isLoadingSelector = createSelector(
  filesFeatureSelector,
  (filesState: FilesStateInterface) => filesState.loading
)

export const errorSelector = createSelector(
  filesFeatureSelector,
  (filesState: FilesStateInterface) => filesState.error
)

export const filesSelector = createSelector(
  filesFeatureSelector,
  (filesState: FilesStateInterface) => filesState.data
)

export const filesCountSelector = createSelector(
  filesFeatureSelector,
  (filesState: FilesStateInterface) => filesState.count
)
