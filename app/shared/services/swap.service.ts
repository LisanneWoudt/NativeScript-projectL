import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SwapRequest} from '../../dto/swap-request';

@Injectable()
export class SwapService {

    constructor(private http: HttpClient) {}

    sendSwapRequest(swapRequest: SwapRequest): Observable<any> {
      return this.http.post('http://192.168.178.18:8080/swap/request', swapRequest);
    }
}
