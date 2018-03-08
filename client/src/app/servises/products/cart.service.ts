import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { LoginService } from '../login/login.service';
import { Url } from '../../consot/url';

@Injectable()
export class CartService {

  constructor(public HttpClient:HttpClient, public LoginService:LoginService) { }

  addToCart(product): Observable<any> {
    console.log(product);
    return this.HttpClient.post(Url.cartAdd, product, {headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`)});
  }

  getCartById(id): Observable<any>{
    return this.HttpClient.get(Url.cartId + id,{headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`)});
  }

}
