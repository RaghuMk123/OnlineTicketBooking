import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { OwnerserviceService } from '../ownerservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-theaterbooking',
  templateUrl: './theaterbooking.component.html',
  styleUrls: ['./theaterbooking.component.css']
})
export class TheaterbookingComponent implements OnInit {

  constructor(private userServ:AuthServiceService,private ownerServ:OwnerserviceService,private loc:Location) { }
  bookingDetails:Array<any>=[]
  ngOnInit(): void {

  //get booking deatils
  this.ownerServ.getBookingDetails().subscribe((res)=>{


    for(let i=0;i<res.data.length;i++)
    {
      let eachDetail={
        movieId:"",
        movieName:"",
        bookedDate:"",
        seats:"",
        userName:"",
        userFullname:"",
        userPhone:"",
        userGmail:"",
        price:"",
        bookingId:"",
      }
     
      eachDetail.movieId=res.data[i].movieId
      eachDetail.seats=res.data[i].numberOfSeats
      eachDetail.bookedDate=res.data[i].date
      eachDetail.userName=res.data[i].userName
      eachDetail.price=res.data[i].price
      eachDetail.bookingId=res.data[i].bookingId
      
      this.bookingDetails.push(eachDetail)
      
    }


    


    for(let i=0;i<this.bookingDetails.length;i++)
    {
      
     this.userServ.getUserData(this.bookingDetails[i].userName).subscribe((res)=>{
      
        this.bookingDetails[i].userFullname=res.data[0].userFullName
        this.bookingDetails[i].userPhone=res.data[0].userPhoneNumber
        this.bookingDetails[i].userGmail=res.data[0].userMail

        

      })

    }

    for(let i=0;i<this.bookingDetails.length;i++)
    {
      this.userServ.getMovieName(this.bookingDetails[i].movieId).subscribe((res)=>{

        this.bookingDetails[i].movieName=res.data[0].movieName
      })
    }




  })


  console.log(this.bookingDetails)

  }



  routeBack()
  {
    this.loc.back()
  }
}
