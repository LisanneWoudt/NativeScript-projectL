import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../dto/user';
import { environment } from '../../environment';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    getUser(userId: number): Observable<any> {
      return this.http.get(environment.host + "users/" + userId);
    }

    getUserByGarment(garmentId: number): Observable<any> {
      return this.http.get(environment.host + "users/fromgarment/" + garmentId);
    }

    getUserGarmentIds(userId: number): Observable<any> {
      return this.http.get(environment.host + "users/" + userId + "/garmentIds");
    }

    updateUser(user: User): Observable<any> {
      return this.http.put(environment.host + "users/edit", user);
    }
}
