import { Component, OnInit } from '@angular/core';
import { AddPhotoService } from '../../Services/add-photo.service';
import {MatDialog} from '@angular/material/dialog';
import { ExitPrivateModeComponent } from '../MessageBoxs/exit-private-mode/exit-private-mode.component';
import { picturesFromData } from 'src/app/Models/picturesFromData';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  
  priateMode:boolean;
  constructor(public ser: AddPhotoService ,public dialog: MatDialog) {
    this.priateMode = false;
  }
  ngOnInit(): void {}

  privateMode = () => {
    if (this.ser.privateModeModel === true) this.ser.privateModeModel = false;
  };

  openDialog(){
    const dialogRef = this.dialog.open(ExitPrivateModeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  showAllPhotos(){
    console.log('i am here');
    
    if(this.ser.privateModeModel) this.ser.uploadPrivatePictures().subscribe(array => this.ser.allPhotos = array);
    else this.ser.uploadUnPrivatePictures().subscribe(array => this.ser.allPhotos = array)
  }

  renderWondow(){
    window.location.reload();
  }
}
