import { Component, OnInit } from '@angular/core';
import { FavoritsService } from "../../../servises/contryApp/favorits.service"
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";

@Component({
  selector: 'app-favorits',
  templateUrl: './favorits.component.html',
  styleUrls: ['./favorits.component.css']
})
export class FavoritsComponent implements OnInit {

  public countries = [];
  
  constructor(public FavoritsService: FavoritsService, public ContryDataService: ContryDataService) {

   }

  ngOnInit() {
      // if(document.cookie == ""){
      //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
      // }
    

    // this.FavoritsService.favorits = [];
    this.FavoritsService.getFavorits().subscribe(res => {
    this.FavoritsService.favorits = res;
    this.countries = this.FavoritsService.favorits;
    });
  }
  removeFromFavorits(i){
    this.FavoritsService.removeFromFavorits(i);
    this.countries = this.FavoritsService.favorits; 
  }

}
