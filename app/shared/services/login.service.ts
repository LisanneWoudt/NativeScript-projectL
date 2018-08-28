import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../../dto/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    console.log(user);
    return this.http.post("http://192.168.178.18:8080/user/login", user, httpOptions);
    //
//    return this.http.get(this.url + '/user/login', httpOptions);
  }
}
