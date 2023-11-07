import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { OwnerserviceService } from '../ownerservice.service';

@Component({
  selector: 'app-edittheater',
  templateUrl: './edittheater.component.html',
  styleUrls: ['./edittheater.component.css']
})
export class EdittheaterComponent implements OnInit {
 time:any;
 TimeAndSeats:any;
 currentMovie:any;
  constructor(private ownerSrveObject:OwnerserviceService,private loc:Location) { }

  ngOnInit(): void {
   

    this.ownerSrveObject.getTheaterTimeSeats().subscribe((res)=>{
       this.TimeAndSeats=res.data

    })
    this.ownerSrveObject.getCurrentMovie().subscribe((res)=>{
      this.currentMovie=res.data
      console.log(this.currentMovie);
    })
  }


  //fuction to change number of seat
  changeSeat(data:any,time:any)
  {

    if(data.seat>0 && data.seat<this.ownerSrveObject.editTheater.theaterSeats)
    {

      let tempObj={
        time:time,
        theaterId:this.ownerSrveObject.editTheater.theaterId,
        seat:data.seat
  
      }
      this.ownerSrveObject.changeTheaterSeat(tempObj).subscribe((res)=>{
  
        console.log(res);
        this.ownerSrveObject.getTheaterTimeSeats().subscribe((res)=>{
          this.TimeAndSeats=res.data
   
       })
  
  
      });

    }
    else
    {
      alert("Invalid Seats")
    }


    
  }
 

  //navigateto home page
  routeBack()
  {
    this.loc.back();
  }
  

}
