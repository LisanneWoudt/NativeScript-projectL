import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwapRequest} from '../../dto/swap-request';
import { environment } from '../../environment';

@Injectable()
export class SwapService {

    baseUrl: string = 'swaprequests/';

    constructor(private http: HttpClient) {}

    sendSwapRequest(swapRequest: SwapRequest): Observable<any> {
      return this.http.post(environment.host + this.baseUrl + 'save', swapRequest);
    }

    getUserSwapRequests(userId: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + 'all');
    }

    updateSwapRequest(swapRequest: SwapRequest): Observable<any> {
      return this.http.post(environment.host +this.baseUrl + 'update', swapRequest);
    }

    updateSwapRequestStatusBool(swapRequestId: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + 'update-status?requestId=' + swapRequestId);
    }

    countSwapRequests(userId: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + 'count?userId=' + userId)
    }

    countNewSwapRequests(userId: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + 'count/new?userId=' + userId)
    }
}
