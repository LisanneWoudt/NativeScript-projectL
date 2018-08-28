import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Garment} from '../../dto/garment';

@Injectable()
export class GarmentService {

    constructor(private http: HttpClient) {}

    getAllGarments(): Observable<any> {
      return this.http.get('/garments');
  //    return this.http.get(this.url + '/user/login', httpOptions);
    }

    addGarment(garment: Garment): Observable<any> {
      return this.http.post('/garments/add', garment);
    }
}
