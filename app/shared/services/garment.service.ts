import {Injectable} from '@angular/core';
import {Observable, forkJoin} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Garment} from '../../dto/garment';
import {Pant} from '../../dto/pant';
import {Shirt} from '../../dto/shirt';
import * as bghttp from "nativescript-background-http";
var session = bghttp.session("image-upload");

@Injectable()
export class GarmentService {

    baseUrl: string = 'http://192.168.178.18:8080/garments/';

    constructor(private http: HttpClient) {}

    getAllGarments(): Observable<any> {
      return this.http.get(this.baseUrl + 'all');
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

    multipartUpload(filename: string, file: string) {
      var request = {
          url: this.baseUrl + 'upload',
          method: "POST",
          headers: {
              "Content-Type": "application/octet-stream",
              "File-Name": file
          },
          description: "description"
      };

      var params = [
                    { name: "name", value: filename},
                    { name: "file", filename: file, mimeType: 'image/jpeg' }
                ];

      let task: bghttp.Task;
      task = session.multipartUpload(params, request);
    }

}
