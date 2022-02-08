import { Component, OnInit } from '@angular/core';
import { Categories } from '../../../Models/category';
import { AddPhotoService } from '../../../Services/add-photo.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.css']
})
export class EditCategoriesComponent implements OnInit {

  allCategories:Categories[]
  constructor(public ser: AddPhotoService) { }

  ngOnInit(): void {
    this.ser.sendCategoriesToClient().subscribe(list =>{
      this.allCategories = list;
    })
  }
  deleteCategory(category:string){
    this.ser.deleteCategory(category).subscribe(l => this.allCategories = l);
  }
  AddCategory(category:string){
    this.ser.addCategory(category).subscribe(l => this.allCategories = l);
  }

}
