import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { computeStyles } from '@popperjs/core';
import { OwnerserviceService } from '../ownerservice.service';
import {Location} from '@angular/common';
import { ValidateService } from '../validate.service';
@Component({
  selector: 'app-addtheater',
  templateUrl: './addtheater.component.html',
  styleUrls: ['./addtheater.component.css']
})
export class AddtheaterComponent implements OnInit {
  visibility=true
  time:any
  city:any
  newTheaterId:any
  movies:any
  add_theatre=false
  constructor(private ownerSrveObject:OwnerserviceService,private route:Location,private validate:ValidateService) { }

  ngOnInit(): void {
  
    this.ownerSrveObject.getCity().subscribe((res)=>{
      this.city=res.data;
    })
    this.ownerSrveObject.getTime().subscribe((res)=>{
      this.time=res.data;
    })
    this.ownerSrveObject.getMovies().subscribe((res)=>{
      this.movies=res.data;
    })

    this.ownerSrveObject.getMaxTheaterId().subscribe((res)=>{


      this.newTheaterId=res.data[0]['MAX(theaterId)'];
      this.newTheaterId=parseInt(this.newTheaterId)+1;


    })


  }
  getNumberofShow(num:any)
  {
    console.log(num)
  }

  RegisterTheater(registerTheater:any)
  {
  var one:boolean,two:boolean,three:boolean,four:boolean
  two=registerTheater.threaterAdress.length<=0
  one=registerTheater.theaterName.length<=0
  three=registerTheater.theaterCity.length<=0
  four=registerTheater.movieId==""
  if(one==true) alert("Enter the theater name properly...") 
  else if(three==true) alert("Please choose the city ...")
  else if(two==true) alert("Enter the theater address properly...") 
  else if(four==true) alert("Please choose the movie ...")
  else if(!this.validate.checkTiming(registerTheater.time1,registerTheater.time2,registerTheater.time3)) alert("Incorrect theatre timings...")
  else if(registerTheater.theaterSeats<0) alert("Provide valid number of seats...")
  else if(registerTheater.price<0) alert("Provide proper price...")

  this.add_theatre=this.validate.checkTiming(registerTheater.time1,registerTheater.time2,registerTheater.time3)&&!one&&!two&&!three&&!four&&!(registerTheater.theaterSeats<0)&&!(registerTheater.price<0)
 
  console.log(this.add_theatre,one,two)

    if(this.add_theatre==true) {
      let r1,r2,r3,r4;
    let timeObject={
      theaterId:"",
      time:"",
      currentSeats:""

    }
   this.ownerSrveObject.addTheaters(registerTheater,this.newTheaterId).subscribe((res)=>{
    console.log(res.data[0]);
    r1=res.data;
     
    })

    if(registerTheater.time1!="")
    {
      timeObject.theaterId=this.newTheaterId;
      timeObject.time=registerTheater.time1;
      timeObject.currentSeats=registerTheater.theaterSeats;
      this.ownerSrveObject.addTheaterTime(timeObject).subscribe((res)=>{
        console.log(res.data);
        r2=res.data
      
      });
      
      
    }
    if(registerTheater.time2!="")
    {
      timeObject.theaterId=this.newTheaterId;
      timeObject.time=registerTheater.time2;
      timeObject.currentSeats=registerTheater.theaterSeats;
      this.ownerSrveObject.addTheaterTime(timeObject).subscribe((res)=>{
        console.log(res.data);
        r2=res.data

        

       });
    }
    if(registerTheater.time3!="")
    {
      timeObject.theaterId=this.newTheaterId;
      timeObject.time=registerTheater.time2;
      timeObject.currentSeats=registerTheater.theaterSeats;
      this.ownerSrveObject.addTheaterTime(timeObject).subscribe((res)=>{
        console.log(res.data);
        r4=res.data;

        });

    }

    this.visibility=false;
    }     

  }

  routeBack()
  {
    this.route.back();
  }
}
