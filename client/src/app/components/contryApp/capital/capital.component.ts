import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  public capitalForm: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const capitalControle = new FormControl('',Validators.required);
  
    this.capitalForm = new FormGroup({capitalControle});
  }

  ngOnInit() {
    // if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }
  }

   submit(){

    let capital = this.capitalForm.get('capitalControle').value;
    this.ContryDataService.getCapital(capital).subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
  }

}
