import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { RegisterService } from '../../servises/login/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public countries:any = [];
  constructor(public RegisterService:RegisterService) { 
    const nameControl = new FormControl('',Validators.required);
    const familyNameControl = new FormControl('',Validators.required);
    const emailControl = new FormControl('',[Validators.required, Validators.email]);
    const passwordControl = new FormControl('',Validators.required);
      this.registerForm = new FormGroup({
        nameControl,
        familyNameControl,
        emailControl,
        passwordControl
    });

  }

  ngOnInit() {
  }

  submit(){
    let name = this.registerForm.get('nameControl').value;
    let familyName = this.registerForm.get('familyNameControl').value;
    let email = this.registerForm.get('emailControl').value;
    let password = this.registerForm.get('passwordControl').value;
    let user = new User(name,familyName,email,password);
    
    this.RegisterService.addUser(user).subscribe((res) => {
      console.log(res);
    },err =>{
      //error
    });
  }
}

class User{
  public Name: string;
  public FamilyName: string;
  public Email: string;
  public Password: string;
  constructor(_name,_familyName,_email,_password){
    this.Name = _name;
    this.FamilyName = _familyName;
    this.Email = _email;
    this.Password = _password
  }
}
