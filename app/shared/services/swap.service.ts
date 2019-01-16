import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwapRequest} from '../../dto/swap-request';

@Injectable()
export class SwapService {

    baseUrl: string = 'http://192.168.178.19:8080/swaprequests/';

    constructor(private http: HttpClient) {}

    sendSwapRequest(swapRequest: SwapRequest): Observable<any> {
      return this.http.post(this.baseUrl + 'save', swapRequest);
    }

    getUserSwapRequests(swapUrl: string, userId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'user/' + swapUrl + userId);
    }
}
