import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {FilesResponseInterface} from "../types/filesResponseInterface";


export const FilesActions = createActionGroup({
  source: 'Files',
  events: {
    'get': props<{user_id: number, skip: number, limit: number}>(),
    'success': props<{files: FilesResponseInterface}>(),
    'failure': (error: any) => ({ error }),
  },
});

