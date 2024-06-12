import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthFacade} from "../../store/auth.facade";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {TokenRequestInterface} from "../../types/tokenRequest.interface";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {ErrorMessageComponent} from "../../../shared/components/error-message/error-message.component";
import {RouterLink} from "@angular/router";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AsyncPipe} from "@angular/common";
import {FlexLayoutModule} from "@ngbracket/ngx-layout";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    ErrorMessageComponent,
    ReactiveFormsModule,
    RouterLink,
    MatInput,
    MatButton,
    AsyncPipe,
    MatLabel,
    FlexLayoutModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly store: Store = inject(Store);
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly fb: FormBuilder = inject(FormBuilder);

  isSubmitting$: Observable<boolean> = this.authFacade.isSubmitting$;
  error$: Observable<string> = this.authFacade.error$;
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(): void {
    const request: TokenRequestInterface = this.form.value;
    this.authFacade.login(request);
    // this.store.dispatch(loginAction({request}));
  }
}
