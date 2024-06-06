import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from "./shared/components/menu/menu.component";
import {currentUserAction} from "./auth/store/actions/currentUser.action";
import {Store} from "@ngrx/store";

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
    this.store.dispatch(currentUserAction())
  }
}
