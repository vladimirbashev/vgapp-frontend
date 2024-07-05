import { createFeature, createReducer, on } from '@ngrx/store';
import {filesInitialState, FilesStateInterface} from "./files.state";
import {FilesDeleteActions, FilesGetActions, FilesPostActions} from "./filesActions";


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
        loading: false,
        error: action.error
      })
    ),
    on(
      FilesPostActions.post,
      (state): FilesStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      FilesPostActions.success,
      (state, action): FilesStateInterface => ({
        ...state,
        data: state.data ? [action.file, ...state.data] : [action.file],
        count: state.count + 1,
        loading: false,
      })
    ),
    on(
      FilesPostActions.failure,
      (state, action): FilesStateInterface => ({
        ...state,
        loading: false,
        error: action.error
      })
    ),
    on(
      FilesDeleteActions.delete,
      (state): FilesStateInterface => ({
        ...state,
        loading: true,
        error: null,
      })
    ),
    on(
      FilesDeleteActions.success,
      (state, action): FilesStateInterface => ({
        ...state,
        data: state.data,
        count: state.count - 1,
        loading: false,
      })
    ),
    on(
      FilesDeleteActions.failure,
      (state, action): FilesStateInterface => ({
        ...state,
        loading: false,
        error: action.error
      })
    )
  ),
});
