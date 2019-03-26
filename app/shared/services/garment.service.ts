import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Garment} from '../../dto/garment';

@Injectable()
export class GarmentService {

    baseUrl: string = 'http://192.168.2.180:8080/garments/';

    constructor(private http: HttpClient) {}

    getAllGarments(urlpart: string, userId: number): Observable<any> {
      return this.http.get(this.baseUrl + urlpart + userId);
    }

    getGarment(id: number): Observable<any> {
      return this.http.get(this.baseUrl + id);
    }

    saveGarment(garment: Garment): Observable<any> {
      return this.http.post(this.baseUrl + 'add', garment);
    }
}
