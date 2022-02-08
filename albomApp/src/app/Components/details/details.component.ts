import { Component, OnInit } from '@angular/core';

interface Views{
  name: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  views: Views[] = [
    {name: 'list'},
    {name: 'grid'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
