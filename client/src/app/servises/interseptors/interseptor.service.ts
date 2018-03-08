import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { LoginService } from '../login/login.service'
@Injectable()
export class InterseptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
   
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
     // Get the auth header from the service.
    const Login = this.injector.get(LoginService);

    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse ){
        if (err.status === 401) {
          console.log('401 from server');
          // redirect to the login route
          Login.logout();
        }
      }
    });
  }




    // return next.handle(req).do(event => {
    //     if (event instanceof HttpResponse) { //<-- HERE
    //       if(event.status == 401){
    //         localStorage.removeItem('unicKey');
    //        this.Router.navigate(['/login']);
    //       }
    //     }
    //   });



//     return next.handle(req).do((event: HttpEvent<any>) => {
//   if (event instanceof HttpResponse) {
//     // process successful responses here
//   }
// }, (error: any) => {
//   if (error instanceof HttpErrorResponse) {
//     if (error.status === 401) {
//       console.log('401');
//       localStorage.removeItem('unicKey');
//       this.Router.navigate(['/login']);
//     }
//   }
// });
//   }


}
