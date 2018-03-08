import { Component, OnInit } from '@angular/core';
import { ContryDataService } from "../../../servises/contryApp/contry-data.service";
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  public populationForm: FormGroup;
  public countries:any = [];
  constructor(public ContryDataService:ContryDataService) { 
    const minControl = new FormControl('',Validators.required);
    const maxControl = new FormControl('',Validators.required);

    this.populationForm = new FormGroup({
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
    let min = this.populationForm.get('minControl').value;
    let max = this.populationForm.get('maxControl').value;
    this.ContryDataService.getPopulation(min,max).subscribe((res) => {
      this.countries = res;
    },err =>{

    });
  }
    
}
