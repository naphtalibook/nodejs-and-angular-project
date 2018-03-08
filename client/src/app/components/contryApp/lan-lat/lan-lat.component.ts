import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-lan-lat',
  templateUrl: './lan-lat.component.html',
  styleUrls: ['./lan-lat.component.css']
})
export class LanLatComponent implements OnInit {

  public lanLatForm: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const topXControl = new FormControl('',Validators.required);
    const bottomXControl = new FormControl('',Validators.required);
    const topYControl = new FormControl('',Validators.required);
    const bottomYControl = new FormControl('',Validators.required);
      this.lanLatForm = new FormGroup({
      topXControl,
      bottomXControl,
      topYControl,
      bottomYControl
    });

  }

  ngOnInit() {
    // if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }
  }

   submit(){
    let topX = this.lanLatForm.get('topXControl').value;
    let bottomX = this.lanLatForm.get('bottomXControl').value;
    let topY = this.lanLatForm.get('topYControl').value;
    let bottomY = this.lanLatForm.get('bottomYControl').value;
    this.ContryDataService.getLanLat(topX,bottomX,topY,bottomY).subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
  }

}

