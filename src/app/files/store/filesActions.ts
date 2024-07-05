import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {FileInterface, FilesResponseInterface} from "../types/filesResponseInterface";


export const FilesGetActions = createActionGroup({
  source: 'Files Get',
  events: {
    'get': props<{user_id: number | string, skip: number, limit: number}>(),
    'success': props<{files: FilesResponseInterface}>(),
    'failure': (error: any) => ({ error }),
  },
});

export const FilesPostActions = createActionGroup({
  source: 'Files Post',
  events: {
    'post': props<{postFile: any}>(),
    'success': props<{file: FileInterface}>(),
    'failure': (error: any) => ({ error }),
  },
});

