import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";


@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent implements OnInit {


  public countries:any = [];
  public selected :any;
  public countryObj: any; 
  public isSelected : boolean = false;
  constructor(public ContryDataService:ContryDataService) { 

  }

  ngOnInit() {
    // if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }

    this.ContryDataService.getallNAmes().subscribe((res) => {
      this.countries = res;
    }, err =>{

    });
   }

  onChange(val){
    this.ContryDataService.getbyName(val).subscribe((res) => {
      this.countryObj = res[0];
      // console.log(this.countryObj);
      this.isSelected = true;
    });
  }

 

}
