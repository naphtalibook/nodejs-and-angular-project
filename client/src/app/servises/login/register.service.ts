import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Url } from '../../consot/url';

@Injectable()
export class RegisterService {

  constructor(public HttpClient:HttpClient) { }

  addUser(user): Observable<any> {
    console.log(user);
    return this.HttpClient.post(Url.register, user);
  }

}
