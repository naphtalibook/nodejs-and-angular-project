import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../../consot/url';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadService {
  public likes = [];
  constructor(public HttpClient: HttpClient) { }

    uploadImage(file: any): Observable<any> {
      const formData = new FormData();
      formData.append('fileToUpload' , file[0]);
      return this.HttpClient.post(Url.fileUpload , formData);
    }

    getAllIages(): Observable<any> {
      return this.HttpClient.get(Url.fileGetPictures);
    }
    addLikeToImg(path): Observable<any>{
       return this.HttpClient.get(Url.fileLike + path);
    }
    clarifai(path):Observable<any>{
       return this.HttpClient.get(Url.clarifai + path);
    }

}
