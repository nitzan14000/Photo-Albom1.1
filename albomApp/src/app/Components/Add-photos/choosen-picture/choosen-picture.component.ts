import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { AddPhotoService } from '../../../Services/add-photo.service';

@Component({
  selector: 'app-choosen-picture',
  templateUrl: './choosen-picture.component.html',
  styleUrls: ['./choosen-picture.component.css']
})
export class ChoosenPictureComponent implements OnInit {
  
  public webcamImage: WebcamImage | undefined;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    console.log(this.webcamImage.imageAsDataUrl);
  }

  constructor(private ser :AddPhotoService) { }
  saveChoosenPicture(){  
    if(this.webcamImage !== undefined){
      this.ser.uploadToService(this.webcamImage.imageAsDataUrl)
    }
  }
  
  ngOnInit(): void {
  }

}
