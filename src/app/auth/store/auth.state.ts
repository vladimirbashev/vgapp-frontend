import {UserInterface} from "../../shared/types/user.interface";


export interface AuthStateInterface {
  isSubmitting: boolean
  currentUser: UserInterface | null
  isLoggedIn: boolean | null
  error: any
}

export const authInitialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  error: null,
  isLoggedIn: null
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
