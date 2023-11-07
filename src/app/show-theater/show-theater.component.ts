import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-show-theater',
  templateUrl: './show-theater.component.html',
  styleUrls: ['./show-theater.component.css']
})
export class ShowTheaterComponent implements OnInit {

  threaters:any
  showTheater=true
  movieTheaters:Array<any>=[]
  constructor(public authObject:AuthServiceService,public route:Router,private loc:Location) { }

  ngOnInit(): void {

    this.authObject.getTheaterInLocation().subscribe((res)=>{
      
      this.threaters=res.data
      if(this.threaters==401)
      {
        this.showTheater=false
      }
      for(let i=0;i<this.threaters.length;i++)
      {

       this.movieTheaters.push(this.threaters[i])


      }

      console.log(this.movieTheaters)

    
    })
  }

  selectTheater(selectedTheater:any)
  {
    this.authObject.userSelectedTheater=selectedTheater;
    // console.log("Funn",selectedTheater)
    // console.log("AURTH",this.authObject.userSelectedTheater);
    this.route.navigate(['theaterseats'])

  }



  routeBack()
  {
    this.loc.back()
  }
}
