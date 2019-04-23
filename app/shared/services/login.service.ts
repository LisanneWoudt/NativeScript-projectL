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
    console.log(user);
    return this.http.post(environment.host + "user/login", user, httpOptions);
    //
//    return this.http.get(this.url + '/user/login', httpOptions);
  }
}
