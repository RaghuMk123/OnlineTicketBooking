import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { OwnerserviceService } from '../ownerservice.service';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
@Component({
  selector: 'app-theaterseats',
  templateUrl: './theaterseats.component.html',
  styleUrls: ['./theaterseats.component.css']
})
export class TheaterseatsComponent implements OnInit {
  
  seatsVisibility=false
  bookingID:any
  bookingFlag=false
  timing:Array<any>=[];
  timeSelected:any
  date:any
  amount:any
  numbersSeats:Array<any>=[];
  selectedSeats:Array<any>=[];
  constructor(public authObject:AuthServiceService,private owerserv:OwnerserviceService,private route:Router) { 

  }
   
  ngOnInit(): void {
   
    this.authObject.getTiming().subscribe((res)=>{
    
      for(let i=0;i<res.data.length;i++)
      {
        this.timing.push(res.data[i])
      }
      console.log(this.timing)

    })



    this.authObject.maxBookingId().subscribe((res)=>{

      let id;
      id=res.data[0]['MAX(bookingId)'];
      this.bookingID=parseInt(id)+1;


    })
  }



  selectedTime(data:any)
  {
   if(data.time!="" && data.date!="")
   {
    this.date=data.date
    if(data.time==this.timing[0].time)
    {
      //using splice method Array
      console.log(this.timing[0].currentSeats)
      this.timeSelected=this.timing[0]
      this.numbersSeats.splice(0,this.numbersSeats.length);
      for(let i=0;i< parseInt(this.timing[0].currentSeats);i++)
      {
          this.numbersSeats.push(i)
      }
      this.seatsVisibility=true
      console.log(this.timing[0].time)
    }
    else if (data.time==this.timing[1].time)
    {
      this.numbersSeats.splice(0,this.numbersSeats.length);
      this.timeSelected=this.timing[1]


      console.log(this.timing[1].currentSeats)
 
      for(let i=0;i<parseInt(this.timing[1].currentSeats);i++)
      {
          this.numbersSeats.push(i)
      }
      this.seatsVisibility=true

    }
    else if (data.time==this.timing[2].time)
    {
      this.numbersSeats.splice(0,this.numbersSeats.length);
      this.timeSelected=this.timing[2]


      console.log(this.timing[2].currentSeats)

      for(let i=0;i<parseInt(this.timing[2].currentSeats);i++)
      {
          this.numbersSeats.push(i)
      }
      this.seatsVisibility=true

    }


   }
   else
   {
    alert("Enter date and time")
   }
    

    

  }


  Book()
  {
    if(this.selectedSeats.length==0)
    {
      alert("Choose your seats")
    }
    else
    {
      let bookings={
        bookingId:this.bookingID,
        movieId:this.authObject.selectedMovie.movieId,
        theaterId:this.authObject.userSelectedTheater.theaterId,
        numberOfSeats:this.selectedSeats.length,
        userName:this.authObject.user.userName,
        date:this.date,
        price: (parseInt(this.authObject.userSelectedTheater.price) * this.selectedSeats.length)
      }
      this.amount=bookings.price
      //do booking
      this.authObject.booking(bookings).subscribe((res)=>{
        console.log(res)

        let data={
          time:this.timeSelected.time,
          theaterId:this.authObject.userSelectedTheater.theaterId,
          seat:this.timeSelected.currentSeats-(this.selectedSeats.length)

        }

        this.owerserv.changeTheaterSeat(data).subscribe((res)=>{
          
        })

      })
       alert("Booking SucessFull");
    this.bookingFlag=true;
    this.seatsVisibility=false



       

      

    }

  }

  
  //to insert selected seats
  seatClick(seat:any)
  {
    let flagInsert=1;
    for(let i=0;i<this.selectedSeats.length;i++)
    {
      if(this.selectedSeats[i]==seat)
      {
        this.selectedSeats.splice(i,1)
        flagInsert=0;
        break;

      }
    }
    if(flagInsert)
    {
      this.selectedSeats.push(seat)
    }
  }



  homePage()
  {
    this.route.navigate(['customerhomepage'])
  }
}
