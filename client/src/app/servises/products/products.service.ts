import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { LoginService } from '../login/login.service';
import { CartService } from './cart.service'
import { Url } from '../../consot/url';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductsService {
  public queryString: string;
  constructor(public HttpClient:HttpClient, public LoginService:LoginService) { }

  queryConstructor(page,searchText,min,max): Observable<any>{
    this.queryString = `${Url.products}?page=${page}`;
    if(searchText != ''){
      this.queryString = this.queryString + `&searchText=${searchText}`;
    }
    if(min != null && max != null){
      this.queryString += `&min=${min}&max=${max}`;
    }
    return this.HttpClient.get(this.queryString,{headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`)});
  }

  

}




  // getProducts(page): Observable<any>{
  //   return this.HttpClient.get(`http://localhost:3003/api/products/all/${page}`,{headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`)});
  // }
  
  // search(text): Observable<any>{
  //   return this.HttpClient.get(`http://localhost:3003/api/products/search/${text}`,{headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`)});
  // }
  // filterByPrice(min,max): Observable<any>{
  //   return this.HttpClient.get(`http://localhost:3003/api/products/price?min=${min}&max=${max}`,{headers:new HttpHeaders(`authorization:${this.LoginService.unicKey}`)});
  // }