import { Component, OnInit } from '@angular/core';
import { picturesFromData } from 'src/app/Models/picturesFromData';
import { AddPhotoService } from 'src/app/Services/add-photo.service';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {


  allPhotos:picturesFromData[];
  slideIndex = 0;


  constructor(public ser: AddPhotoService) { 
    //this.showDivs(this.slideIndex);
  }

  

  plusDivs(n) {
    
    this.slideIndex += n;
    if (this.slideIndex === this.allPhotos.length){
      this.slideIndex = 0
    }
    if(this.slideIndex === -1){
      this.slideIndex = this. allPhotos.length -1
    }
  }


  ngOnInit(): void {
    if(this.ser.privateModeModel) this.ser.uploadPrivatePictures().subscribe(array => this.allPhotos = array);
    else this.ser.uploadUnPrivatePictures().subscribe(array => this.allPhotos = array)

    //this.allPhotos = this.allPhotos.map(i => i.url)
  }

}
