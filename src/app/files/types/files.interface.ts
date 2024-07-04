import {UserInterface} from "../../shared/types/user.interface";

export interface FileInterface {
  id: string
  path: string
  user: UserInterface
  createdate: string
  updatedate: string
}

export type FileType = FileInterface | null;
export type FilesType = FileInterface[] | null;

export interface FilesInterface {
  items: FileInterface[]
  count: number
}
