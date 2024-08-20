import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  reg={
    email:"",
    password:"",
    password1:""
  }

  constructor( private data : DataService) { }

  ngOnInit(): void {
  }
  submit(){
    this.data.create(this.reg)
    .subscribe(
      response =>{
        console.log(response);

      },
      error => {
        console.log(error);
        
      }
    );
  }
}
