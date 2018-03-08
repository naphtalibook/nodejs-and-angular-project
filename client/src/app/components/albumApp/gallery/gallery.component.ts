import { Component, OnInit } from '@angular/core';
import { UploadService } from "../../../servises/albumApp/upload.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public imgData:Array<any>;
  
  constructor(public UploadService: UploadService) { }

  ngOnInit() {
    this.UploadService.getAllIages().subscribe(res => {
      console.log(res) ;
      this.imgData = res;
      
    }, err =>{console.log(err);});
  }

}
