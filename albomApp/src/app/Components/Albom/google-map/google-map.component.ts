import { Component, OnInit } from '@angular/core';
import { AddPhotoService } from 'src/app/Services/add-photo.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  lat = 32.74574862516711;
  lng = 35.00157199364129;

  constructor(public ser: AddPhotoService) { }

  onChoseLocation(event){
    
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.newItemEvent.emit({lat:this.lat,lng:this.lng})
  }

  ngOnInit(): void {
  }

}
