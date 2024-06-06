import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./shared/components/menu/menu.component";
import {Store} from "@ngrx/store";
import {CurrentUserActions} from "./auth/store/auth.actions";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'vgapp-frontend';
  private readonly store: Store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(CurrentUserActions.get())
  }
}
