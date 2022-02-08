import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AddPhotoService } from '../../../Services/add-photo.service';
import { upLoadPictureModel } from '../../../Models/upLoadPictureModel';

@Component({
  selector: 'app-local-machine',
  templateUrl: './local-machine.component.html',
  styleUrls: ['./local-machine.component.css']
})
export class LocalMachineComponent implements OnInit {

  selectedFile: File ;
  picture :  upLoadPictureModel ;
  onFileSelected(event : any){
    
    this.selectedFile = <File>event.target.files[0];
    console.log(`this is the selecet frile`,this.selectedFile); 
    this.picture = {id:this.selectedFile.lastModified,name:this.selectedFile.name}
    
  }


  constructor(private http:HttpClient , private service : AddPhotoService) {}

  Save(){
    let reader = new FileReader();
    this.service.pictureFromLocalMachin = this.picture;
    
    if(this.selectedFile !== undefined){
      reader.readAsDataURL(this.selectedFile);
  
      let f = (pictureLocalMachine :any) =>{
        this.service.uploadToService(pictureLocalMachine)
      };
      reader.onload = () =>{
        f(reader.result)
      }
    }
  }

  AddPicture(){
   
  }

  ngOnInit(): void {
  }

}
