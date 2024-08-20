import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent implements OnInit {
  hos = { 
    hostelbranch_id:"",
    hostel_name:"",
    address:"",
    phonenumber:"",
    manager_id:""
  };
  show:boolean=false;

  constructor( private dataservice : DataService, 
    private _router :Router ){ }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.hos);
    this.dataservice.hostel(this.hos).subscribe(
            (response): void =>{
        console.log(response);
        if (response != null){
          this._router.navigate(['']);
          sessionStorage.setItem("hos",JSON.stringify(response));
          alert("successfully entered details");
          

        }
        else this.show=true;
      },
      error => {console.log(error);
                this.show=true;});
  }
}




