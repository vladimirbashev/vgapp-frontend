import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {FilesInterface} from "../types/files.interface";


export const FilesActions = createActionGroup({
  source: 'Files',
  events: {
    'get': props<{user_id: number, skip: number, limit: number}>(),
    'success': props<{files: FilesInterface}>(),
    'failure': (error: any) => ({ error }),
  },
});

