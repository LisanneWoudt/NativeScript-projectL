import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Garment} from '../../dto/garment';
import { environment } from '../../environment';

@Injectable()
export class GarmentService {

    baseUrl: string = 'garments/';

    constructor(private http: HttpClient) {}

    getAllGarments(urlpart: string, userId: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + urlpart + userId);
    }

    getGarment(id: number): Observable<any> {
      return this.http.get(environment.host + this.baseUrl + id);
    }

    saveGarment(garment: Garment, urlString: String): Observable<any> {
      return this.http.post(environment.host + this.baseUrl + urlString, garment);
    }

    deleteGarment(id: number): Observable<any> {
      return this.http.delete(environment.host + this.baseUrl + 'delete/' + id)
    }
}
