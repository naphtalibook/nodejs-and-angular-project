import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Url } from '../../consot/url';

@Injectable()
export class RegisterService {

  constructor(public HttpClient:HttpClient) { }

  addToCart(product): Observable<any> {
    console.log(product);
    return this.HttpClient.post(Url.cartAdd, product, );
  }

}
