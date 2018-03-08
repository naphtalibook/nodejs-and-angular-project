import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Url } from '../../consot/url';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/throw';

@Injectable()
export class ContryDataService {
  public url: string = Url.countries;
  constructor(public httpClient:HttpClient) { }

    // getCookie(): Observable<any> {
    //     return this.httpClient.get(`http://localhost:3003/cookie`, { withCredentials: true })
    //     .catch((error) => Observable.throw( error));  
    // }

    getallNAmes(): Observable<any> {
        return this.httpClient.get(`${this.url}allNames`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
     getbyName(name): Observable<any> {
        return this.httpClient.get(`${this.url}name/${name}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
    getPopulation(min,max): Observable<any> {
        return this.httpClient.get(`${this.url}population?min=${min}&max=${max}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
    getArea(min,max): Observable<any> {
        return this.httpClient.get(`${this.url}area?min=${min}&max=${max}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
     getGlobalStats(minArea,maxArea,minPop,maxPop): Observable<any> {
        return this.httpClient.get(`${this.url}globalstats?minArea=${minArea}&maxArea=${maxArea}&minPop=${minPop}&maxPop=${maxPop}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
     getNeighbors(country): Observable<any> {
        return this.httpClient.get(`${this.url}borders/${country}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
    getMaxLang(): Observable<any> {
        return this.httpClient.get(`${this.url}maxLang`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
    getCapital(capital): Observable<any> {
        return this.httpClient.get(`${this.url}capital?name=${capital}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
    getTimeZone(min,max): Observable<any> {
        return this.httpClient.get(`${this.url}utc?utcMin=${min}&utcMax=${max}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
        //http://localhost:3003/countries/utc?utcMin=4&utcMax=4
    }
    getLanLat(topLeftX,bottomRightX,topLeftY,bottomRightY): Observable<any> {
        return this.httpClient.get(`${this.url}square?topLeftX=${topLeftX}&topLeftY=${topLeftY}&bottomRightX=${bottomRightX}&bottomRightY=${bottomRightY}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
    //http://localhost:3003/countries/square?topLeftX=40&topLeftY=60&bottomRightX=30&bottomRightY=70
     getCallingCode(num): Observable<any> {
        return this.httpClient.get(`${this.url}callingCodes/${num}`, { withCredentials: true, })
        .catch((error) => Observable.throw(error));
    }
}
