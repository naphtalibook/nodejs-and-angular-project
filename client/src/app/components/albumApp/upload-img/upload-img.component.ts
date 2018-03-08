import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../../servises/albumApp/upload.service';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {

  public fileList: FileList;
  constructor(public uploadService: UploadService) { }

  ngOnInit() {
  }

  uploadImg() {
    this.uploadService.uploadImage(this.fileList).subscribe((res) => {
      alert(res);
    });
  }

  fileChanged(event) {
  this.fileList = event.target.files;
  }

}
