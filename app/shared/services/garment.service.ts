import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Garment} from '../../dto/garment';

@Injectable()
export class GarmentService {

    constructor(private http: HttpClient) {}

    getAllGarments(): Observable<any> {
      return this.http.get('http://192.168.178.18:8080/garments');
  //    return this.http.get(this.url + '/user/login', httpOptions);
    }

    getGarment(id: number): Observable<any> {
      return this.http.get('http://192.168.178.18:8080/garment/' + id);
    }

    addGarment(garment: Garment): Observable<any> {
      return this.http.post('http://192.168.178.18:8080/garments/add', garment);
    }
}
