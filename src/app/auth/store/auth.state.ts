import {UserType} from "../../shared/types/user.interface";
import {ErrorType} from "../../shared/types/error.interface";


export interface AuthStateInterface {
  loading: boolean
  currentUser: UserType
  error: ErrorType
}

export const authInitialState: AuthStateInterface = {
  loading: false,
  currentUser: null,
  error: null
}


// import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
// import { Message } from '../../messenger';
//
// export interface MessagesState extends EntityState<Message> {
//   loading: [];
// }
//
// export const selectId = ({ id }: Message) => id;
//
// export const sortComparer = (a: Message, b: Message): number =>
//   a.publishDate.toString().localeCompare(b.publishDate.toString());
//
// export const adapter: EntityAdapter<Message> = createEntityAdapter(
//   { selectId, sortComparer }
// );
//
// export const initialState: MessagesState = adapter.getInitialState(
//   { loading: [] }
// );
