import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as bghttp from "nativescript-background-http";
var session = bghttp.session("image-upload");

@Injectable()
export class ImageService {

    baseUrl: string = 'http://192.168.178.18:8080/images/';

    constructor(private http: HttpClient) {}


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
