import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {

 public timeZoneForme: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const minControl = new FormControl('',Validators.required);
    const maxControl = new FormControl('',Validators.required);

      this.timeZoneForme = new FormGroup({
      minControl,
      maxControl
    });

  }

  ngOnInit() {
    //  if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }
  }
   submit(){
    let min = this.timeZoneForme.get('minControl').value;
    let max = this.timeZoneForme.get('maxControl').value;
    this.ContryDataService.getTimeZone(min,max).subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
  }
  
}
