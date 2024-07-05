import {ErrorNullableType} from "../../shared/types/error.interface";
import {FilesType} from "../types/filesResponseInterface";


export interface FilesStateInterface {
  data: FilesType,
  count: number,
  loading: boolean,
  error: ErrorNullableType
}

export const filesInitialState: FilesStateInterface = {
  data: null,
  count: 0,
  loading: false,
  error: null
}

