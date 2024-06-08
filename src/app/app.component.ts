import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./shared/components/menu/menu.component";
import {AuthFacade} from "./auth/store/auth.facade";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'vgapp-frontend';
  private readonly authFacade: AuthFacade = inject(AuthFacade);

  ngOnInit(): void {
    this.authFacade.currentUser();
  }
}
