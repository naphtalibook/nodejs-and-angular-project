import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";

@Component({
  selector: 'app-max-lang',
  templateUrl: './max-lang.component.html',
  styleUrls: ['./max-lang.component.css']
})
export class MaxLangComponent implements OnInit {
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { }

  ngOnInit() {
    // if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }

    
    this.ContryDataService.getMaxLang().subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
    
  
  }

}
