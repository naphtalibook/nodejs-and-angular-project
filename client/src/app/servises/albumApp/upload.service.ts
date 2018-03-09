import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Url } from '../../consot/url';
import { LoginService } from '../login/login.service';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadService {
  public likes = [];
  constructor(public HttpClient: HttpClient, public LoginService:LoginService) { }

    uploadImage(file: any): Observable<any> {
      const formData = new FormData();
      formData.append('fileToUpload' , file[0]);
      return this.HttpClient.post(Url.fileUpload , formData, { headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`) });
    }

    getAllIages(): Observable<any> {
      return this.HttpClient.get(Url.fileGetPictures, { headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`) });
    }
    addLikeToImg(path): Observable<any>{
       return this.HttpClient.get(Url.fileLike + path, { headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`) });
    }
    clarifai(path):Observable<any>{
       return this.HttpClient.get(Url.clarifai + path, { headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`) });
    }

}
