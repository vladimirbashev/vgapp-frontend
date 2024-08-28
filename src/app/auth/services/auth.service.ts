import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {TokenResponseInterface} from "../types/tokenResponseInterface";
import { JwtHelperService } from '@auth0/angular-jwt';
import {PersistanceService} from "../../shared/services/persistance.service";
import {RegisterRequestInterface} from "../types/registerRequest.interface";
import {UserInterface} from "../../shared/types/user.interface";
import {TokenRequestInterface} from "../types/tokenRequest.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private persistanceService: PersistanceService) {}

  register(data: RegisterRequestInterface): Observable<UserInterface> {
    const url = environment.apiUrl + '/users/'
    return this.http.post<UserInterface>(url, data)
  }


  getCurrentUser(): Observable<UserInterface> {
    const url = environment.apiUrl + '/users/me/'
    return this.http.get<UserInterface>(url)
  }

  login(data: TokenRequestInterface): Observable<TokenResponseInterface> {
    const url = environment.apiUrl + '/token/'
    let fd = new FormData()
    fd.append('username', data.email)
    fd.append('password', data.password)
    return this.http.post<TokenResponseInterface>(url, fd)
  }

  public isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService();
    // const token = localStorage.getItem('accessToken');
    const token = this.persistanceService.get('accessToken');
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
}
