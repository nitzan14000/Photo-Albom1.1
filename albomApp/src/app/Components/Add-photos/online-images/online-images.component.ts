import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddPhotoService } from '../../../Services/add-photo.service';

@Component({
  selector: 'app-online-images',
  templateUrl: './online-images.component.html',
  styleUrls: ['./online-images.component.css']
})
export class OnlineImagesComponent implements OnInit {
  
  showPicture: string;
  showPictures: string[] = [];
  
  constructor(private http:HttpClient , private service : AddPhotoService) { }
  
  ngOnInit(): void {
  }
  
  serachPicturesInPexelAPI(e:any){
    console.log(e.target.value);
    
    const query = e;
    
  }

  searchPictures(e:any){
    //console.log(e.target.value);
    this.showPicture = e.target.value;
    this.showPictures.push(e.target.value);
    console.log(this.showPictures);
    e.target.value ='';
  }

  upload(item : string){
    this.service.uploadToService(item)
  }
}
