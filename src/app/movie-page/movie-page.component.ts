import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { OwnerserviceService } from '../ownerservice.service';



@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {


  showLocationVar=false
  cities:any
  constructor(public authObject:AuthServiceService,private route:Router,private ownerObj:OwnerserviceService) { }

  ngOnInit(): void {
 

   this.ownerObj.getCity().subscribe((res)=>{

    this.cities=res.data
    console.log(this.cities)
   })

  }

  //function to read location
  chooseLocation(location:any)
  {
    if(location.Location=='')
    {
      alert("choose Location")
    }
    else
    {
      console.log(location.city)

      this.authObject.userLocation=location.Location
      this.route.navigate(['showtheater'])
    }
   
    
  }

//threaterId theaterName theaterLocation threaterAdress owerId movieId


  //function to toggle location box view
  showLocation()
  {
    this.showLocationVar=!(this.showLocationVar)
  }
}
