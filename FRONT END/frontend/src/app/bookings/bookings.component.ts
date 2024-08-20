import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bkd = {
    booking_ID:"",
    customer_id:"",
    room_id:"",
    checkindate:"",
    checkoutdate:"",
    no_of_days:""



  }
  show:boolean=false;

  constructor( private dataservice : DataService, 
    private _router :Router ){ }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.bkd);
    this.dataservice.bookings(this.bkd).subscribe(
            (      response): void =>{
        console.log(response);
        if (response != null){
          this._router.navigate(['/payments' ]);
          sessionStorage.setItem("bkd",JSON.stringify(response));
          alert("successfully entered details");


        }
        else this.show=true;
      },
      error => {console.log(error);
                this.show=true;});
  }
}

  




