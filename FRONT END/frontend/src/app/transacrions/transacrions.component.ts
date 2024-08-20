import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transacrions',
  templateUrl: './transacrions.component.html',
  styleUrls: ['./transacrions.component.css']
})
export class TransacrionsComponent implements OnInit {
  td ={
    transaction_id:"",
    customer_id:"",
    booking_id:"",
    payment_id:"",
    employee_id:""
  }
  show:boolean=false;

  constructor( private dataservice : DataService, 
    private _router :Router ){ }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.td);
    this.dataservice.transactions(this.td).subscribe(
            (      response): void =>{
        console.log(response);
        if (response != null){
          this._router.navigate([ ]);
          sessionStorage.setItem("td",JSON.stringify(response));

        }
        else this.show=true;
      },
      error => {console.log(error);
                this.show=true;});
  }
}


