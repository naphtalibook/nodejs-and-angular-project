import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { LoginService } from '../login/login.service';
import { Url } from '../../consot/url';
import 'rxjs/add/observable/throw';

@Injectable()
export class FavoritsService {

  public favorits = [];
  constructor(public httpClient: HttpClient, public LoginService:LoginService ) {}
  getFavorits(): Observable<any>{
      return this.httpClient.get(Url.countriesFavorits, { headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`) })
      .catch((error) => Observable.throw(error)); 
  }
  addToFavorits(country): Observable<any>{
    if(this.favorits.indexOf(country) === -1){
      // this.favorits.push(country);
      return this.httpClient.post(Url.countriesFavorits, country,{ headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`)} )
      .catch((error) => Observable.throw(error));
    }
  }
  removeFromFavorits(i){
    this.favorits.splice(i, 1);
  }
}
