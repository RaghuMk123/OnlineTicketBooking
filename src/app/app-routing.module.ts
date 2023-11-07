import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { LoginComponent } from './login/login.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

import { MoviePageComponent } from './movie-page/movie-page.component';

import { ShowTheaterComponent } from './show-theater/show-theater.component';
import { TheaterseatsComponent } from './theaterseats/theaterseats.component';
import { OwnerRegistrationComponent } from './owner-registration/owner-registration.component';
import { OwnerhomeComponent } from './ownerhome/ownerhome.component';
import { AddtheaterComponent } from './addtheater/addtheater.component';
import { EdittheaterComponent } from './edittheater/edittheater.component';
import { EdittheatermovieComponent } from './edittheatermovie/edittheatermovie.component';
import { EdittheaterdetailComponent } from './edittheaterdetail/edittheaterdetail.component';
import { TheaterbookingComponent } from './theaterbooking/theaterbooking.component';
const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'customerhomepage',component:CustomerHomepageComponent

  },
  {
    path:'customerregistraion',component:CustomerRegistrationComponent

  },
  {
    path:'moviepage',component:MoviePageComponent
  },
  {
    path:'showtheater',component:ShowTheaterComponent

  },
  {
    path:'theaterseats',component:TheaterseatsComponent
  },
  {
    path:'ownerregistration',component:OwnerRegistrationComponent
  },
  {
    path:'ownerhome',component:OwnerhomeComponent
  },
  {
    path:'addtheater',component:AddtheaterComponent
  },
  {
    path:'edittheater',component:EdittheaterComponent
  },
  {
      path:'edittheatermovie',component:EdittheatermovieComponent
  },
  {
    path:'edittheaterdetail',component:EdittheaterdetailComponent
  },
  {
     path:'theaterbooking',component:TheaterbookingComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'**',component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
