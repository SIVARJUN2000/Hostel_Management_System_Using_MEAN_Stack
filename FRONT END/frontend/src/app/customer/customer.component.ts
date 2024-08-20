import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  cus={
    customer_id:"",
    customer_name:"",
    customer_address:"",
    c_phonenumber:"",
    c_email:""



  };
  show:boolean=false;

  constructor( private dataservice : DataService, 
    private _router :Router ){ }

  ngOnInit(): void {
  }
  save(){
    console.log(this.cus);
    this.dataservice.customer(this.cus).subscribe(
            (    response): void =>{
        console.log(response);
        if (response != null){
          this._router.navigate(['/bookings' ]);
          sessionStorage.setItem("cus",JSON.stringify(response));
          alert("successfully entered details");

        }
        else this.show=true;
      },
      error => {console.log(error);
                this.show=true;});
  }
}



