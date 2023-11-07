import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edittheaterdetail',
  templateUrl: './edittheaterdetail.component.html',
  styleUrls: ['./edittheaterdetail.component.css']
})
export class EdittheaterdetailComponent implements OnInit {
  currentMovie:any;
  time:any
  theaterTime:any;
  TimeAndSeats:any
   time1Detail:any
   time2Detail:any
   time3Detail:any
  constructor(public ownerServ:OwnerserviceService,private loc:Location) { }

  ngOnInit(): void {

    this.ownerServ.getCurrentMovie().subscribe((res)=>{
      this.currentMovie=res.data
      console.log(this.currentMovie);
    })

    this.ownerServ.getTime().subscribe((res)=>{
      this.time=res.data
    })

    this.ownerServ.getTheaterTimeSeats().subscribe((res)=>{
      this.TimeAndSeats=res.data

   })



   this.ownerServ.getTheaterTimeSeats().subscribe((res)=>{
  
    this.time1Detail=res.data[0];
    this.time2Detail=res.data[1];
    this.time3Detail=res.data[2];
   });



  }


  
addNewTime(data:any)
{
  let result= confirm("Number of seats will reset want to proceed?");
  if(result==true)
  {
    let time={
      time:data.ntime1,
      theaterId:this.ownerServ.editTheater.theaterId,
      currentSeats:this.ownerServ.editTheater.theaterSeats
    }
    //delete  previous times
    this.ownerServ.deleteCurrentTime().subscribe((res)=>{

      this.ownerServ.addTheaterTime(time).subscribe((res)=>{

           time.time=data.ntime2;
           //add seconndtime
            this.ownerServ.addTheaterTime(time).subscribe((res)=>{
                 time.time=data.ntime3; 
                 this.ownerServ.addTheaterTime(time).subscribe((res)=>{

                     this.ownerServ.getTheaterTimeSeats().subscribe((res)=>{
                       this.TimeAndSeats=res.data
      
                                                 })
         
                                      })
       
                          })
          })
      

    })
   
  
  }
  else
  {
    alert("Updatation cancled")
  }
}


changeName(data:any)
{
  var pattern = new RegExp('[a-zA-Z]+');
  var result=pattern.test(data.theaterName);
 
  
  if(data.theaterName!="" && result)
  {
    let tempObj={
      theaterId:this.ownerServ.editTheater.theaterId,
      theaterName:data.theaterName
    }
    this.ownerServ.changeTheaterName(tempObj).subscribe((res)=>{
    
      
      alert("Revisit the page to see changes");
  
    });

  }
  else
  {
    alert("Enter valid Name")
  }
 
  
}

changeAdress(data:any)
{
  let tempObj={
    theaterId:this.ownerServ.editTheater.theaterId,
    threaterAdress:data.theaterAdress
  }
 console.log(tempObj)
  this.ownerServ.changeAdress(tempObj).subscribe((res)=>{
  
    alert("Revisit the page to see changes");
  });

}

changePrice(data:any)
{
  

   if(data.price>0)
   {
    this.ownerServ.changePrice(data).subscribe((res)=>{
      alert("Revisit the page to see changes");
    });

   }
   else
   {
    alert("Enter valid price")
   }


 
}

//changes seat in the timingtable updating
changeSeat(data:any)
{

  if(data.theaterSeats>0)
  {
    let tempobj={
      theaterSeats:data.theaterSeats,
      theaterId:this.ownerServ.editTheater.theaterId
    }
  
    let totalseat=this.ownerServ.editTheater.theaterSeats;
  
  
    if(data.theaterSeats>(totalseat-this.time1Detail.currentSeats) && data.theaterSeats>(totalseat-this.time2Detail.currentSeats) && data.theaterSeats>(totalseat-this.time3Detail.currentSeats))
    {
        //update each time
        let newTheaterSeat={
          time:this.time1Detail.time,
          theaterId:this.ownerServ.editTheater.theaterId,
          seat:data.theaterSeats-(totalseat-this.time1Detail.currentSeats)
             }
            
          //change first time seats
                  
          this.ownerServ.changeTheaterSeat(newTheaterSeat).subscribe((res)=>{   
          })
  
  
          //change second time seats
         
          newTheaterSeat.time=this.time2Detail.time
          newTheaterSeat.seat=data.theaterSeats-(totalseat-this.time2Detail.currentSeats)
  
  
          this.ownerServ.changeTheaterSeat(newTheaterSeat).subscribe((res)=>{   
          })
          //change third time seats
  
          
          newTheaterSeat.time=this.time3Detail.time
          newTheaterSeat.seat=data.theaterSeats-(totalseat-this.time3Detail.currentSeats)
          this.ownerServ.changeTheaterSeat(newTheaterSeat).subscribe((res)=>{   
          })
  
          //change seats in theater table
          this.ownerServ.changeTotalTheaterSeat(tempobj).subscribe((res)=>{
            alert("Revisit the page to see changes");
          
          })
       
     }
  
     else
     {
      
     alert("More seats are booked We cannot process your request")
 
         
     }
     
  
   }

  else
  {
    alert("Provide valid number of seats...")
  }
 
}



routeBack()
{
  this.loc.back()
}
}
