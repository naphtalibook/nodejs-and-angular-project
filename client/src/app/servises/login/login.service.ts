import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { Url } from '../../consot/url';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  public unicKey: string;
  public url: string = Url.login;
  constructor(public httpClient:HttpClient, private Router:Router) { }

  login(loginData): Observable<any> {
    return this.httpClient.post(this.url,loginData);
  }

  veryfay(): Observable<any>{
    return this.httpClient.get(Url.veryfay,{headers:new HttpHeaders(`authorization:${this.unicKey}`)});
  }
  logout(){
    this.unicKey = '';
    localStorage.removeItem('unicKey');
    this.Router.navigate(['/login']);
  }


}
