import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./shared/components/menu/menu.component";
import {AuthFacade} from "./auth/store/auth.facade";
import {FlexModule} from "@ngbracket/ngx-layout";
import {AuthService} from "./auth/services/auth.service";


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, MenuComponent, FlexModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'vgapp-frontend';
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly authService: AuthService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.authFacade.currentUser();
    } else {
      this.authFacade.get_token_google();
    }
  }
}
