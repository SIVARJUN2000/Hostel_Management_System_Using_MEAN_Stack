import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { HostelComponent } from './hostel/hostel.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PaymentsComponent } from './payments/payments.component';


import { HttpClientModule } from '@angular/common/http';
import { LoninComponent } from './lonin/lonin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';
import { Home2Component } from './home2/home2.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { CustomerComponent } from './customer/customer.component';
import { BookingsComponent } from './bookings/bookings.component';
import { TransacrionsComponent } from './transacrions/transacrions.component';
import { DataService } from './data.service';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    HostelComponent,
    RoomsComponent,
    PaymentsComponent,
    
    
    
    
    
    LoninComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserLoginComponent,
    AdminLoginComponent,
    RegisterComponent,
    Home2Component,
    EmployeedetailsComponent,
    CustomerComponent,
    BookingsComponent,
    TransacrionsComponent,
    
    
    
    
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
