import {Component, inject, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {UserInterface} from "../../types/user.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector, isAnonymousSelector, isLoggedInSelector} from "../../../auth/store/auth.selectors";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {LogoutActions} from "../../../auth/store/actions/logout.action";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    AsyncPipe,
    MatButton,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  private readonly store: Store = inject(Store);

  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<UserInterface | null>

  constructor() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

  ngOnInit(): void {
    // this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    // this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
    // this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

  onLogout() {
    this.store.dispatch(LogoutActions.logout())
  }
}
