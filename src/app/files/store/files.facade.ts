import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {FilesActions} from "./files.actions";
import {Observable} from "rxjs";
import {FilesType} from "../types/filesResponseInterface";
import {errorSelector, filesCountSelector, filesSelector, isLoadingSelector} from "./files.selectors";


@Injectable({ providedIn: 'root' })
export class FilesFacade {
  private readonly store: Store = inject(Store);

  readonly files$: Observable<FilesType> = this.store.select(filesSelector);
  readonly filesCount$: Observable<number> = this.store.select(filesCountSelector);
  readonly isLoading$: Observable<boolean> = this.store.select(isLoadingSelector);
  readonly error$: Observable<any> = this.store.select(errorSelector);

  get(user_id: number, skip: number, limit: number): void {
    this.store.dispatch(FilesActions.get({user_id, skip, limit}))
  }
}
