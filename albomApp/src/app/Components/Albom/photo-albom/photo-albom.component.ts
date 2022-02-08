import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { picturesFromData } from '../../../Models/picturesFromData';
import { AddPhotoService } from '../../../Services/add-photo.service';

@Component({
  selector: 'app-photo-albom',
  templateUrl: './photo-albom.component.html',
  styleUrls: ['./photo-albom.component.css'],
})
export class PhotoAlbomComponent implements OnInit {
  @Input()
  id: string;
  allPhotos: picturesFromData[];
  orderPhotos: picturesFromData[];

  refreshPictures$ = new BehaviorSubject<boolean>(true);
  //searchByName:string
  constructor(private ser: AddPhotoService) {}

  searchByName(name: string) {
    const array = this.allPhotos.filter((a) => a.title === name);
    if (array.length === 0) {
      this.getAllPhotos()
    } else {
      this.allPhotos = array;
    }
  }

  searchByCategory(category: string) {
    console.log(category);
    const array = this.allPhotos.filter((a) => a.category === category);
    if (array.length === 0) {
      this.getAllPhotos()
    } else {
      this.allPhotos = array;
    }
  }

  clickedPhoto(item: picturesFromData) {
    this.ser.picture = item;
  }

  ngOnInit(): void {
    this.allPhotos = this.ser.allPhotos;
    if (this.ser.privateModeModel)
      this.ser
        .uploadPrivatePictures()
        .subscribe((array) => (this.allPhotos = array));
    else
      this.ser
        .uploadUnPrivatePictures()
        .subscribe((array) => (this.allPhotos = array));
  }

  getAllPhotos(): void {
    if (this.ser.privateModeModel)
      this.ser
        .uploadPrivatePictures()
        .subscribe((array) => (this.allPhotos = array));
    else
      this.ser
        .uploadUnPrivatePictures()
        .subscribe((array) => (this.allPhotos = array));
  }
}
