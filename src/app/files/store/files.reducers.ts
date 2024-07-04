import { createFeature, createReducer, on } from '@ngrx/store';
import {filesInitialState, FilesStateInterface} from "./files.state";
import {FilesActions} from "./files.actions";


export const filesFeature = createFeature({
  name: 'files',
  reducer: createReducer(
    filesInitialState,
    on(
      FilesActions.get,
      (state): FilesStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      FilesActions.success,
      (state, action): FilesStateInterface => ({
        ...state,
        data: action.files.items,
        count: action.files.count,
        loading: false,
      })
    ),
    on(
      FilesActions.failure,
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
