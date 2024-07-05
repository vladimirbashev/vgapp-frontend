import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import {environment} from "../../../environments/environment";
import {FileDeleteResponseInterface, FileInterface, FilesResponseInterface} from "../types/filesResponseInterface";
import {ErrorInterface} from "../../shared/types/error.interface";


@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http: HttpClient) {}

  get(user_id: number | string, skip: number, limit: number): Observable<FilesResponseInterface> {
    const params = new HttpParams().set('skip', skip).set('limit', limit);

    // const url = environment.apiUrl + '/users/'
    // const url = [environment.apiUrl, 'users', user_id, 'files'].join('/');
    const url = `${environment.apiUrl}/users/${user_id}/files/`;
    return this.http.get<FilesResponseInterface>(url, {params})
  }

  post(file: any): Observable<FileInterface> {
    // const url = [environment.apiUrl, 'files'].join('/');
    const data = new FormData();
    data.append('file', file, file.name);
    const url = `${environment.apiUrl}/files/`;
    return this.http.post<FileInterface>(url, data)
  }

  delete(file_id: number): Observable<FileDeleteResponseInterface> {
    const url = `${environment.apiUrl}/files/${file_id}/`;
    return this.http.delete<FileDeleteResponseInterface>(url)
  }
}
