import {ErrorType} from "../../shared/types/error.interface";
import {FilesType} from "../types/files.interface";


export interface FilesStateInterface {
  data: FilesType,
  count: number,
  loading: boolean,
  error: ErrorType
}

export const filesInitialState: FilesStateInterface = {
  data: null,
  count: 0,
  loading: false,
  error: null
}

