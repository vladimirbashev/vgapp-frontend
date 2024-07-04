import {Component, inject, OnInit} from '@angular/core';
import {Observable, takeUntil} from "rxjs";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthFacade} from "../../store/auth.facade";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";
import {ErrorMessageComponent} from "../../../shared/components/error-message/error-message.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {AsyncPipe} from "@angular/common";
import {FlexLayoutModule} from "@ngbracket/ngx-layout";
import {MatProgressBar} from "@angular/material/progress-bar";
import {Destroyer} from "../../../shared/components/base";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        ErrorMessageComponent,
        MatFormField,
        RouterLink,
        MatButton,
        MatInput,
        AsyncPipe,
        MatLabel,
        FlexLayoutModule,
        MatProgressBar
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent extends Destroyer  implements OnInit {
  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly fb: FormBuilder = inject(FormBuilder);

  isLoading$: Observable<boolean> = this.authFacade.isLoading$;
  error$: Observable<string> = this.authFacade.error$;
  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
    this.isLoading$
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value){
          this.form.disable();
        } else {
          this.form.enable();
        }
      });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value, this.form.valid);
      const request: RegisterRequestInterface = this.form.value;
      // this.store.dispatch(registerAction({request}));
      this.authFacade.register(request);
    }
  }
}
