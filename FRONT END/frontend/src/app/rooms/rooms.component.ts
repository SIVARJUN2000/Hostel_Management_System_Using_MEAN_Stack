import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rmd ={
    room_id:"",
    room_description:"",
    roomprice:"",
    hostel_id:"",
    roomstatus:""
  }
  show:boolean=false;

  constructor( private dataservice : DataService, 
    private _router :Router ){ }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.rmd);
    this.dataservice.rooms(this.rmd).subscribe(
            (      response): void =>{
        console.log(response);
        if (response != null){
          this._router.navigate([ ]);
          sessionStorage.setItem("rmd",JSON.stringify(response));

        }
        else this.show=true;
      },
      error => {console.log(error);
                this.show=true;});
  }
}

  
