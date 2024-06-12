import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent implements OnInit{
  @Input('value') value: Observable<any>
  message: Observable<string>

  ngOnInit(): void {
    this.message = this.value.pipe(
      map((value) => {
        return value && typeof value !== 'string' ? 'Internal error' : value
      })
    )
  }
}
