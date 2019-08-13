import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../../dto/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(environment.host + "users/login", user, httpOptions);
  }
}
