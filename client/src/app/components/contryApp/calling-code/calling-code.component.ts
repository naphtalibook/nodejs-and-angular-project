import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-calling-code',
  templateUrl: './calling-code.component.html',
  styleUrls: ['./calling-code.component.css']
})
export class CallingCodeComponent implements OnInit {

 public callinCodeForm: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const codeControle = new FormControl('',Validators.required);
  
    this.callinCodeForm = new FormGroup({codeControle});
  }

  ngOnInit() {
    // if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }
  }

   submit(){

    let num = this.callinCodeForm.get('codeControle').value;
    this.ContryDataService.getCallingCode(num).subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
  }

}
