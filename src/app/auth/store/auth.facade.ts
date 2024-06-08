import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CurrentUserActions, LogoutActions} from "./auth.actions";
import {currentUserSelector, isAnonymousSelector} from "./auth.selectors";
import {UserInterface} from "../../shared/types/user.interface";

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly store: Store = inject(Store);

  readonly isAnonymous$: Observable<boolean> = this.store.select(isAnonymousSelector);
  readonly currentUser$: Observable<UserInterface | null> = this.store.select(currentUserSelector);

  logout(): void {
    this.store.dispatch(LogoutActions.logout())
  }

  currentUser(): void {
    this.store.dispatch(CurrentUserActions.get())
  }
}
