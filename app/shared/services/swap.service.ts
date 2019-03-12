import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwapRequest} from '../../dto/swap-request';

@Injectable()
export class SwapService {

    baseUrl: string = 'http://192.168.2.106:8080/swaprequests/';

    constructor(private http: HttpClient) {}

    sendSwapRequest(swapRequest: SwapRequest): Observable<any> {
      return this.http.post(this.baseUrl + 'save', swapRequest);
    }

    getUserSwapRequests(userId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'all');
    }

    updateSwapRequest(swapRequest: SwapRequest): Observable<any> {
      return this.http.post(this.baseUrl + 'update', swapRequest);
    }
    updateSwapRequestStatusBool(swapRequestId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'update-statusbool/' + swapRequestId);
    }

    countSwapRequests(userId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'count/' + userId)
    }

    countNewSwapRequests(userId: number): Observable<any> {
      return this.http.get(this.baseUrl + 'count/new/' + userId)
    }
}
