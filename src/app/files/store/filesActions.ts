import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {FileDeleteResponseInterface, FileInterface, FilesResponseInterface} from "../types/filesResponseInterface";
import {ErrorInterface, ErrorType} from "../../shared/types/error.interface";


export const FilesGetActions = createActionGroup({
  source: 'Files Get',
  events: {
    'get': props<{user_id: number | string, skip: number, limit: number}>(),
    'success': props<{files: FilesResponseInterface}>(),
    'failure': (error: ErrorType) => ({ error }),
  },
});

export const FilesPostActions = createActionGroup({
  source: 'Files Post',
  events: {
    'post': props<{postFile: any}>(),
    'success': props<{file: FileInterface}>(),
    'failure': (error: ErrorType) => ({ error }),
  },
});

export const FilesDeleteActions = createActionGroup({
  source: 'Files Delete',
  events: {
    'delete': props<{file_id: number}>(),
    'success': props<{file: FileDeleteResponseInterface}>(),
    'failure': (error: ErrorType) => ({ error }),
  },
});

