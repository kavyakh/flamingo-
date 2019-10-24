import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ScheduleComponent } from './schedule/schedule.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TicketComponent } from './ticket/ticket.component';
import { PaymentComponent } from './payment/payment.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BookingComponent } from './booking/booking.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'schedule',
    component:ScheduleComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'resetpassword',
    component:ResetpasswordComponent
  },
  {
    path:'ticket',
    component:TicketComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'editprofile',
    component:EditProfileComponent
  },
  {
    path:'updateflight',
    component:UpdateFlightComponent
  },
  {
    path:'editpayment',
    component:EditPaymentComponent
  },
  {
    path:'addflight',
    component:AddFlightComponent
  },
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
