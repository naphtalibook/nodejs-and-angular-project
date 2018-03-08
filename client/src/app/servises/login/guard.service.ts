import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { LoginService } from "./login.service"

@Injectable()
export class GuardService implements CanActivate {
  constructor(public LoginService:LoginService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let PermitidRoles = route.data["roles"] as Array<string>;

    return new Promise<boolean>((resolve)=> {
      let localKey = localStorage.getItem("unicKey");
      if(localKey != null){
        this.LoginService.unicKey = localKey;
      }
      if(this.LoginService.unicKey != null || localKey != null){
        this.LoginService.veryfay().subscribe(res=>{
          if(res){
            // console.log(res);
            // console.log(roles);
            if(PermitidRoles.indexOf(res) > -1){
              resolve(true) ;
            }else{
               resolve(false) ;
            }
          }else{
            resolve(false) ;
          }
        }, err => console.log(err));
      }else{
        resolve(false) ;
      }   
    });
  }

}

  // canActivate() {
  //   let localKey = localStorage.getItem("unicKey");
  //   if(this.LoginService.unicKey != null){
  //     return true;
  //   }else if(localKey != null){
  //     this.LoginService.unicKey = localKey;
  //     return true;
  //   }else{
  //     return false;
  //   }
    
  // }