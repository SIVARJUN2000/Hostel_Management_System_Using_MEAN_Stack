import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  pyd ={
    payment_id:"",
    customer_id:"",
    booking_ID:"",
    roomprice:"",
    no_of_days:"",
    totalpayments:""
  };
  show:boolean=false;

  constructor( private dataservice : DataService, 
    private _router :Router ){ }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.pyd);
    this.dataservice.payments(this.pyd).subscribe(
            (      response): void =>{
        console.log(response);
        if (response != null){
          this._router.navigate([ '/home1']);
          sessionStorage.setItem("emp",JSON.stringify(response));
          alert("successfully completed payment");


        }
        else this.show=true;
      },
      error => {console.log(error);
                this.show=true;});
  }
}

  

