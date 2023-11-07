import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerHomepageComponent,
    CustomerRegistrationComponent,
    MoviePageComponent,
    ShowTheaterComponent,
    TheaterseatsComponent,
    OwnerRegistrationComponent,
    OwnerhomeComponent,
    AddtheaterComponent,
    EdittheaterComponent,
    EdittheatermovieComponent,
    EdittheaterdetailComponent,
    TheaterbookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
