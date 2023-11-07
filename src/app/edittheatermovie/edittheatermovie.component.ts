import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';
import { Location } from '@angular/common';
import { ValidateService } from '../validate.service';
@Component({
  selector: 'app-edittheatermovie',
  templateUrl: './edittheatermovie.component.html',
  styleUrls: ['./edittheatermovie.component.css']
})
export class EdittheatermovieComponent implements OnInit {
  currentMovie:any;
  time:any;
  movies:any;
  
  constructor(public ownerServ:OwnerserviceService,private loc:Location,public validate:ValidateService) { }

  ngOnInit(): void {

    this.ownerServ.getCurrentMovie().subscribe((res)=>{
      this.currentMovie=res.data
      console.log(this.currentMovie);
    })
    this.ownerServ.getTime().subscribe((res)=>{
      this.time=res.data;

    })
    this.ownerServ.getMovies().subscribe((res)=>{
      this.movies=res.data;
      
    })   


  }  
 changeMovie(data:any)
 {

  //delete  all the timing from theatertiminng table
  if(this.validate.checkTiming(data.time1,data.time2,data.time3)) 
   {
    this.ownerServ.deleteCurrentTime().subscribe((res)=>{
      console.log("deleted",res)
     });
  
     let tempObj={
       theaterId:this.ownerServ.editTheater.theaterId,
       movieId:data.movieId
     };
     
     this.ownerServ.changeMovie(tempObj).subscribe((res)=>{
       this.ownerServ.getCurrentMovie().subscribe((res)=>{
         this.currentMovie=res.data
         })  
   });
  
       //change  timing
       let timeObj={
        currentSeats:this.ownerServ.editTheater.theaterSeats,
        time:data.time1,//current
        theaterId:this.ownerServ.editTheater.theaterId,
       }
   
       //change time 1
       this.ownerServ.addTheaterTime(timeObj).subscribe((res)=>{
  
       })
  
        //change time 2
       timeObj.time=data.time2;
       this.ownerServ.addTheaterTime(timeObj).subscribe((res)=>{
  
      })
  
       //change time 3
      timeObj.time=data.time3;
       this.ownerServ.addTheaterTime(timeObj).subscribe((res)=>{
  
      })
      alert("Details updated...")
   }
   else {
    alert("Enter the timings properly...")
   }

 }


 routeBack()
 {
 this.loc.back()
 }

}
