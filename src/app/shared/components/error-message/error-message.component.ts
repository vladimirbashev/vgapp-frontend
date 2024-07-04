import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {AsyncPipe} from "@angular/common";
import {ErrorInterface, ErrorType} from "../../types/error.interface";

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
  @Input('value') value: Observable<ErrorType>
  message: Observable<string | null>

  ngOnInit(): void {
    this.message = this.value.pipe(
      map((value) => {
        if (!value) {
          return value;
        }
        if (typeof value === 'string') {
          return value;
        }
        if (value['detail'] && typeof value['detail'] === 'string') {
          return value['detail'];
        }
        return 'Internal error';
      })
    )
  }
}
