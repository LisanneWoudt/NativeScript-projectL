import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Garment} from '../../dto/garment';
import {Pant} from '../../dto/pant';
import {Shirt} from '../../dto/shirt';

@Injectable()
export class GarmentService {

    baseUrl: string = 'http://192.168.178.18:8080/garments/';

    constructor(private http: HttpClient) {}

    getAllGarments(): Observable<any> {
      return this.http.get(this.baseUrl + 'all');
  //    return this.http.get(this.baseUrl + 'garments');
    }

    getGarment(id: number): Observable<any> {
    //      return this.http.get(this.baseUrl + 'garments/' + id);
      return this.http.get(this.baseUrl + id);
    }

    addPant(pant: Pant): Observable<any> {
      return this.http.post(this.baseUrl + 'add/pant', pant);
    }

    addShirt(shirt: Shirt): Observable<any> {
      return this.http.post(this.baseUrl + 'add/shirt', shirt);
    }
}
