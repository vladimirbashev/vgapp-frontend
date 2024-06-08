import {Component, inject, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {UserInterface} from "../../types/user.interface";
import {select, Store} from "@ngrx/store";
import {currentUserSelector, isAnonymousSelector} from "../../../auth/store/auth.selectors";
import {AsyncPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {LogoutActions} from "../../../auth/store/auth.actions";
import {AuthFacade} from "../../../auth/store/auth.facade";


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    AsyncPipe,
    MatButton
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  private readonly store: Store = inject(Store);
  private readonly authFacade: AuthFacade = inject(AuthFacade);

  isAnonymous$: Observable<boolean> = this.authFacade.isAnonymous$;
  currentUser$: Observable<UserInterface | null> = this.authFacade.currentUser$;

  onLogout() {
    this.authFacade.logout();
  }
}
