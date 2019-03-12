import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwapRequest} from '../../dto/swap-request';

@Injectable()
export class UserService {

    baseUrl: string = 'http://192.168.2.106:8080/users/';

    constructor(private http: HttpClient) {}

    getUser(userId: number): Observable<any> {
      return this.http.get(this.baseUrl + userId);
    }

}
