import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwapRequest} from '../../dto/swap-request';
import { environment } from '../../environment';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    getUser(userId: number): Observable<any> {
      return this.http.get(environment.host + "users/" + userId);
    }

}
