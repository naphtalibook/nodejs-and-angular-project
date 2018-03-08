import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { LoginService } from '../../../servises/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm: FormGroup;
 public unicKey: string;
 public mess: string;
//  public Products;
  constructor(public LoginService: LoginService) { 
    const userNameControl = new FormControl('',Validators.required);
    const passwordControl = new FormControl('',Validators.required);

      this.loginForm = new FormGroup({
      userNameControl,
      passwordControl
    });

  }
  ngOnInit() {
  }

  submit(){
    let userName = this.loginForm.get('userNameControl').value;
    let password = this.loginForm.get('passwordControl').value;
    let loginData = {
      "userName": userName,
      "password": password
    }
    this.LoginService.login(loginData).subscribe((res) => {
      this.LoginService.unicKey = res;
      localStorage.setItem("unicKey", res);
      this.mess = 'ok';
      console.log(res);

    },err =>{
      this.mess = 'err';
    });
  }
  // getProducts(){
  //   this.LoginService.getProducts().subscribe((res) =>{
  //     this.Products = res;
  //     console.log(res);
  //   },err=> console.log(err));
  // }

}
