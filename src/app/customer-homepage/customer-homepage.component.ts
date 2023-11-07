import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent implements OnInit {
 
  moviesThriller:any
  moviesAction:any
  moviesRomantic:any
  moviesAdventure:any
  bookingVisibility=false
  
  bookingDetails:Array<any>=[]

  constructor(public authServiceObject:AuthServiceService,private route:Router,private loc:Location) {
    
   }
  
  ngOnInit(): void {
    this.authServiceObject.getMovies('T').subscribe((res)=>{
      console.log(res)
     this.moviesThriller=res.data
     
  });

  this.authServiceObject.getMovies('A').subscribe((res)=>{
    
   this.moviesAction=res.data
   });



   this.authServiceObject.getMovies('AD').subscribe((res)=>{
   
   this.moviesAdventure=res.data
   });

   this.authServiceObject.getMovies('R').subscribe((res)=>{
    
   this.moviesRomantic=res.data
        });



   //get booking deatils
   this.authServiceObject.getbookingDetails().subscribe((res)=>{
    
    
    for(let i=0;i<res.data.length;i++)
    {
      let eachDetail={
        movieId:"",
        theaterId:"",
        movieName:"",
        theaterName:"",
        bookedDate:"",
        seats:""
      }
     
      eachDetail.movieId=res.data[i].movieId
      eachDetail.theaterId=res.data[i].theaterId
      eachDetail.seats=res.data[i].numberOfSeats
      eachDetail.bookedDate=res.data[i].date
      
      this.bookingDetails.push(eachDetail)
    }
    console.log(this.bookingDetails)

    //find movie name


    for(let i=0;i<this.bookingDetails.length;i++)
    {
     this.authServiceObject.getMovieName(this.bookingDetails[i].movieId).subscribe((res)=>{

        this.bookingDetails[i].movieName=res.data[0].movieName
      })

    }


    for(let i=0;i<this.bookingDetails.length;i++)
    {

    this.authServiceObject.getTheaterName(this.bookingDetails[i].theaterId).subscribe((res)=>{

      this.bookingDetails[i].theaterName=res.data[0].theaterName
    })
  }
  
 
   })

  

}
 

//selected Movie
  movieSelect(movie:any)
  {
    this.authServiceObject.selectedMovie=movie;
    this.authServiceObject.userSelectedMovieId=movie.movieId
    this.route.navigate(['moviepage'])

  }
 
logout(){

  this.loc.back();
}


  history()
  {
    this.bookingVisibility=!this.bookingVisibility
  }

  home()
  {
    this.bookingVisibility=!this.bookingVisibility
  }
}


