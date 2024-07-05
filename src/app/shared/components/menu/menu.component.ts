import {Component, inject, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {UserNullableType} from "../../types/user.interface";
import {AsyncPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
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
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  currentUser$: Observable<UserNullableType> = this.authFacade.currentUser$;

  onLogout() {
    this.authFacade.logout();
  }
}
