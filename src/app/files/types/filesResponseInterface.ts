import {UserInterface} from "../../shared/types/user.interface";

export interface FileInterface {
  id: number
  path: string
  user: UserInterface
  createdate: string
  updatedate: string
}

export type FileType = FileInterface | null;
export type FilesType = FileInterface[] | null;

export interface FilesResponseInterface {
  items: FileInterface[]
  count: number
}

export interface FileDeleteResponseInterface {
  id: number
}
