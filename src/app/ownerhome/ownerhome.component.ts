import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.css']
})
export class OwnerhomeComponent implements OnInit {
  Theaters:any
  visibilityTheater=true;
  constructor(public ownerServObject:OwnerserviceService,private route:Router) { }
 
  ngOnInit(): void {
    this.ownerServObject.getOwnerTheaters().subscribe((res)=>{
     this.Theaters=res.data
     console.log(this.Theaters)
     if(this.Theaters==401)
     {
  this.visibilityTheater=false; 
     }
    })
  }



  navigateAddTheater()
  {
      this.route.navigate(['addtheater'])
  }
  editTheater(theater:any)
  {
    this.ownerServObject.editTheater=theater;
    this.route.navigate(['edittheater']);
  }
  editMovie(theater:any)
  {
    this.ownerServObject.editTheater=theater;
    this.route.navigate(['edittheatermovie']);

  }
  editTheaterDetails(theater:any)
  {
    this.ownerServObject.editTheater=theater;
    this.route.navigate(['edittheaterdetail']);
  }
  deleteTheater(theater:any)
  {
   let res= confirm("Are you sure??")
   if(res==true)
   {
    this.ownerServObject.editTheater=theater;
    this.ownerServObject.deleteTheater().subscribe((res)=>{

      //reload theaters
      this.ownerServObject.getOwnerTheaters().subscribe((res)=>{
        this.Theaters=res.data
       
        if(this.Theaters==401)
         {
          this.visibilityTheater=false; 
         }
       })

    })
   }
   
  }


  bookingDetails(theater:any)
  {
    this.ownerServObject.editTheater=theater
    this.route.navigate(['theaterbooking'])

  }
}
