import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as bghttp from "nativescript-background-http";
var session = bghttp.session("image-upload");
const httpModule = require("tns-core-modules/http");
import {environment} from '../../environment';

@Injectable()
export class ImageService {

  baseUrl: string = 'images/';

  constructor(private http: HttpClient) {}

  multipartUpload(filename: string, file: string): bghttp.Task {
    var request = {
        url: environment.host + this.baseUrl + 'upload',
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
    return task;
  }

  downloadImage(garmentId: number) {
    return httpModule.getImage(environment.host + this.baseUrl + "download/" + garmentId);
  }

  downloadCompressedImage(garmentId: number) {
    return httpModule.getImage(environment.host + this.baseUrl + "download/compressed/" + garmentId)
  }
}
