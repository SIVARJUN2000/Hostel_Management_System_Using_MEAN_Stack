import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  emp = {
    employee_id:"",
    employee_name:"",
    address:"",
    phonenumber:"",
    email:"",
    hostel_id:""
  };
  show:boolean=false;

  constructor( private dataservice : DataService, 
    private _router :Router ){ }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.emp);
    this.dataservice.employeedetails(this.emp).subscribe(
            (      response): void =>{
        console.log(response);
        if (response != null){
          this._router.navigate(['/home1' ]);
          sessionStorage.setItem("emp",JSON.stringify(response));
          alert("successfully entered details");

        }
        else this.show=true;
      },
      error => {console.log(error);
                this.show=true;});
  }
}

  


