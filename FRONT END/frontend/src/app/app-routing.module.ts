import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoninComponent } from './lonin/lonin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { HostelComponent } from './hostel/hostel.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CustomerComponent } from './customer/customer.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PaymentsComponent } from './payments/payments.component';
import { TransacrionsComponent } from './transacrions/transacrions.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'lonin',component:LoninComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'register',component:RegisterComponent},
  {path:'home2',component:Home2Component},
  {path:'hostel',component:HostelComponent},
  {path:'employeedetails',component:EmployeedetailsComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'customer',component:CustomerComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'transactions',component:TransacrionsComponent},
  {path:'home',component:HomeComponent},
  {path:'app',component:AppComponent},
  {path:'home1',component:Home1Component}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
