import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CurrentUserActions, LoginActions, LogoutActions, RegisterActions} from "./auth.actions";
import {currentUserSelector, errorSelector, isLoadingSelector} from "./auth.selectors";
import {UserNullableType} from "../../shared/types/user.interface";
import {TokenRequestInterface} from "../types/tokenRequest.interface";
import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {ErrorNullableType} from "../../shared/types/error.interface";


@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly store: Store = inject(Store);

  readonly currentUser$: Observable<UserNullableType> = this.store.select(currentUserSelector);
  readonly isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);
  readonly error$: Observable<ErrorNullableType> = this.store.select(errorSelector);

  logout(): void {
    this.store.dispatch(LogoutActions.logout())
  }

  currentUser(): void {
    this.store.dispatch(CurrentUserActions.get())
  }

  login(request: TokenRequestInterface): void {
    this.store.dispatch(LoginActions.login({request}));
  }

  register(request: RegisterRequestInterface): void {
    this.store.dispatch(RegisterActions.register({request}))
  }
}
