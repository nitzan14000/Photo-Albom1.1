import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddPhotoService } from '../../../Services/add-photo.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor() {    
  }

  ngOnInit(): void { 
  }

}
