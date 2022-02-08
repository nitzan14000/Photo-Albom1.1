import { Component, OnInit } from '@angular/core';
import { AddPhotoService } from '../../../Services/add-photo.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exit-private-mode',
  templateUrl: './exit-private-mode.component.html',
  styleUrls: ['./exit-private-mode.component.css']
})
export class ExitPrivateModeComponent implements OnInit {

  constructor(private ser: AddPhotoService , public router:Router , public location:Location) { }

  ngOnInit(): void {
  }

  exitPrivateMode(){
    this.ser.privateModeModel = false
    console.log(this.ser.privateModeModel);
    window.location.reload();
  }; 

}
