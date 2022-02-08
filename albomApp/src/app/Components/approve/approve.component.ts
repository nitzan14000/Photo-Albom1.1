import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  private:boolean;
  location:boolean;
  camera:boolean;

  aproved:boolean;

  constructor() { 
    this.private=false
    this.location = false
    this.camera = false
    this.aproved = false
  }

  ngOnInit(): void {
    
  }
  checkCheckBoxvalue(event){
    this.private = event.checked
    this.nextPage()
  }
  checkCheckBoxvalue1(e){
    this.location = e.checked
    this.nextPage()
  }
  checkCheckBoxvalue2(e){
    this.camera = e.checked
    this.nextPage()
  }

  nextPage(){
 /*    console.log(this.private);
    console.log(this.location);
    console.log(this.camera);
    console.log(this.aproved); */
    if(this.private  && this.location  && this.camera ){
      this.aproved  = true;
    }else{
      this.aproved =  false;
    }
    console.log(this.aproved);
  }

}
