import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddPhotoService } from '../../../Services/add-photo.service';


@Component({
  selector: 'app-private-mode',
  templateUrl: './private-mode.component.html',
  styleUrls: ['./private-mode.component.css']
})
export class PrivateModeComponent implements OnInit {

  hide = true;
  constructor(public ser: AddPhotoService){}
  ngOnInit(): void {
  }

  checkPassword(password:string){
    this.ser.privateMode(password)
  }

}
