import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.css']
})
export class GlobalStatsComponent implements OnInit {

  public globalStatsForm: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const minAreaControl = new FormControl('',Validators.required);
    const maxAreaControl = new FormControl('',Validators.required);
    const minPopControl = new FormControl('',Validators.required);
    const maxPopControl = new FormControl('',Validators.required);
      this.globalStatsForm = new FormGroup({
      minAreaControl,
      maxAreaControl,
      minPopControl,
      maxPopControl
    });

  }

  ngOnInit() {
    //  if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }
  }

   submit(){
    let minArea = this.globalStatsForm.get('minAreaControl').value;
    let maxArea = this.globalStatsForm.get('maxAreaControl').value;
    let minPop = this.globalStatsForm.get('minPopControl').value;
    let maxPop = this.globalStatsForm.get('maxPopControl').value;
    this.ContryDataService.getGlobalStats(minArea,maxArea,minPop,maxPop).subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
  }

}
