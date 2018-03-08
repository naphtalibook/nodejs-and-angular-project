import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'


@Component({
  selector: 'app-neighbors',
  templateUrl: './neighbors.component.html',
  styleUrls: ['./neighbors.component.css']
})
export class NeighborsComponent implements OnInit {

  public neighborForm: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const countrycontrole = new FormControl('',Validators.required);
  
    this.neighborForm = new FormGroup({countrycontrole});
  }

  ngOnInit() {
    //  if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }
  }

   submit(){

    let country = this.neighborForm.get('countrycontrole').value;
    this.ContryDataService.getNeighbors(country).subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
  }

}
