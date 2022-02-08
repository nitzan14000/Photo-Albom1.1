import { Component, OnInit } from '@angular/core';
import { picturesFromData } from '../../../Models/picturesFromData';
import { AddPhotoService } from '../../../Services/add-photo.service';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Categories } from '../../../Models/category';

@Component({
  selector: 'app-edit-picture',
  templateUrl: './edit-picture.component.html',
  styleUrls: ['./edit-picture.component.css'],
})
export class EditPictureComponent implements OnInit {

  picture: picturesFromData;
  options: Categories[] ;
  
  constructor(private ser: AddPhotoService) {
    this.picture = ser.picture;
   // console.log(this.picture.privateMood);
    
  }
  
  ngOnInit() {
    this.ser.sendCategoriesToClient().subscribe((list) => (this.options = list));
  }
  
  saveEditPicture() {
    console.log(this.picture);
    this.ser.editPicture(this.picture)
  }
  updateTitle(inputValue) {
    if (inputValue === undefined){
      inputValue.target.value =""
    }
    this.picture.title = inputValue.target.value;
  }
  n(num){
    if(num ===1){
      this.picture.privateMood = !this.picture.privateMood
    }
    if(num ===2){
      this.picture.favorite = !this.picture.favorite
      console.log(this.picture.favorite);
      
    }
  }
  chagngeLocation1(inputValue) {
    console.log(inputValue);
    
    console.log(inputValue.lat)
    let coord = JSON.stringify(inputValue)
    //console.log(coord)
    console.log(coord);
    const ar = coord.split('{')
    const array = ar[1].split('}');
    
    this.picture.location = array[0]
  }
  chagngeLocation2(inputValue) {
     this.picture.location = inputValue.target.value;
  }
  changeCategory(category){
    this.picture.category = category.target.value;
    console.log(category.target.value); 
  }
}

