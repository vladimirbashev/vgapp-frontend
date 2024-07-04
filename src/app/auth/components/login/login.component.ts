import {Component, inject, OnInit} from '@angular/core';
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
import {MatProgressBar} from "@angular/material/progress-bar";
import {tap} from "rxjs/operators";

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
    FlexLayoutModule,
    MatProgressBar
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly fb: FormBuilder = inject(FormBuilder);

  isLoading$: Observable<boolean> = this.authFacade.isLoading$;
  error$: Observable<string> = this.authFacade.error$;
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
    console.log('test')
    this.isLoading$.subscribe((value) => {
      console.log(value)
      if (value){
        this.form.disable();
      } else {
        this.form.enable();
      }
    });
  }

  onSubmit(): void {
    const request: TokenRequestInterface = this.form.value;
    this.authFacade.login(request);
    // this.store.dispatch(loginAction({request}));
  }
}
