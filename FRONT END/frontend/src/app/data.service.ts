import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl='http://localhost:8080/api';





@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }
  
  create(data:any){
    return this.http.post(baseUrl,data);
  }
  hostel(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/hostelbranchs',data)
    
  }
  customer(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/customerdetails',data)
  }
  employeedetails(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/employeess',data)
  }
  bookings(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/bookings',data)
  }
  payments(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/paymentss',data)
  }
  transactions(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/transactions',data)
  }
  rooms(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/roomstatuss',data)
  }
  AdminLogin(data:any){
    console.log(data)
    return this.http.post(baseUrl+'/roomstatuss',data)
  }
  
  
}
