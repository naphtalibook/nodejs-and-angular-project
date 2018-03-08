import { Component, OnInit, Input } from '@angular/core';
import { FavoritsService } from "../../../servises/contryApp/favorits.service"

@Component({
  selector: 'app-contry-panel',
  templateUrl: './contry-panel.component.html',
  styleUrls: ['./contry-panel.component.css']
})
export class ContryPanelComponent implements OnInit {

  @Input() contry: any;

  constructor(public FavoritsService: FavoritsService) { }

  ngOnInit() {
  }
  addToFavorits(){
    this.FavoritsService.addToFavorits(this.contry).subscribe();
  }

}
