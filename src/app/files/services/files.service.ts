import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from "../../../environments/environment";
import {FilesResponseInterface} from "../types/filesResponseInterface";


@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http: HttpClient) {}

  get(user_id: number | string, skip: number, limit: number): Observable<FilesResponseInterface> {
    const params = new HttpParams().set('skip', skip).set('limit', limit);

    // const url = environment.apiUrl + '/users/'
    const url = [environment.apiUrl, 'users', user_id, 'files'].join('/');
    return this.http.get<FilesResponseInterface>(url, {params})
  }
}
