import { createFeature, createReducer, on } from '@ngrx/store';
import {filesInitialState, FilesStateInterface} from "./files.state";
import {FilesGetActions} from "./filesActions";


export const filesFeature = createFeature({
  name: 'files',
  reducer: createReducer(
    filesInitialState,
    on(
      FilesGetActions.get,
      (state): FilesStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      FilesGetActions.success,
      (state, action): FilesStateInterface => ({
        ...state,
        data: action.files.items,
        count: action.files.count,
        loading: false,
      })
    ),
    on(
      FilesGetActions.failure,
      (state, action): FilesStateInterface => ({
        ...state,
        data: null,
        count: 0,
        loading: false,
        error: action.error
      })
    )
  ),
});
