import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Garment} from '../../dto/garment';
import {Pant} from '../../dto/pant';
import {Shirt} from '../../dto/shirt';

@Injectable()
export class GarmentService {

    baseUrl: string = 'http://192.168.2.106:8080/garments/';

    constructor(private http: HttpClient) {}

    getAllGarments(urlpart: string, userId: number): Observable<any> {
      return this.http.get(this.baseUrl + urlpart + userId);
    }

    getGarment(id: number): Observable<any> {
      return this.http.get(this.baseUrl + id);
    }

    saveGarment(pant: Pant, shirt: Shirt): Observable<any> {
      if (pant != null) {
        return this.http.post(this.baseUrl + 'add/pant', pant);
      }
      else {
        return this.http.post(this.baseUrl + 'add/shirt', shirt);
      }
    }
}
