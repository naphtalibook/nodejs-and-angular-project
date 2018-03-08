import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from "../../../servises/albumApp/upload.service";

@Component({
  selector: 'app-img-panel',
  templateUrl: './img-panel.component.html',
  styleUrls: ['./img-panel.component.css']
})
export class ImgPanelComponent implements OnInit {

  @Input()
  public path;
  @Input()
  public likes;
  public clarifaiItems: Array<any>;
  public url:string = 'http://localhost:3003/pictures/'
  constructor(public UploadService: UploadService) { }

  ngOnInit() {
  }
  like(){
    this.UploadService.addLikeToImg(this.path).subscribe(res =>{
      this.likes = res;
    });
  }
  clarifai(pah){
    this.UploadService.clarifai(this.path).subscribe(res =>{
      this.clarifaiItems = res;
      console.log(res);
    });
  }

}
