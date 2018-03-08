import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public areaForm: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const minControl = new FormControl('',Validators.required);
    const maxControl = new FormControl('',Validators.required);

      this.areaForm = new FormGroup({
      minControl,
      maxControl
    });

  }

  ngOnInit() {
    // if(document.cookie == ""){
    //   this.ContryDataService.getCookie().subscribe((res) => {},err =>{});
    // }
  }
   submit(){
    let min = this.areaForm.get('minControl').value;
    let max = this.areaForm.get('maxControl').value;
    this.ContryDataService.getArea(min,max).subscribe((res) => {
      this.countries = res;
    },err =>{
      //error
    });
  }
  
}
