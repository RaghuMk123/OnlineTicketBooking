import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  apiUrl='http://localhost:3000/';
  selectedMovie:any;
  userLocation:any
  userSelectedMovieId:any
  userSelectedTheater:any
  bookingDetails:any
  user:any
  

  constructor(private httpObject:HttpClient) { }




checkCustomerUsername(userName:string):Observable<any>
 { 
   
  let url=this.apiUrl+'customer/'+userName
   
   return( this.httpObject.get(`${url}`));

 }

getMovies(category:string):Observable<any>
{
 let url=this.apiUrl+'movies/'+category;
  
 return( this.httpObject.get(`${url}`));

}


registerCustomer(data:any):Observable<any>
{
  let url=this.apiUrl+'customer'

  return(this.httpObject.post(`${url}`,data))

}



getTheaterInLocation():Observable<any>
{
  let url=this.apiUrl+'loctheater/'+this.userLocation+'/'+this.userSelectedMovieId
  return this.httpObject.get(`${url}`)
}



getTiming():Observable<any>
{
  let url=this.apiUrl+'theatertime/'+this.userSelectedTheater.theaterId

  console.log(url)

  return(this.httpObject.get(`${url}`))
}


maxBookingId():Observable<any>
{

  let url=this.apiUrl+'maxbookingid'
  return(this.httpObject.get(`${url}`))
}

booking(data:any):Observable<any>
{
  let url=this.apiUrl+'book';
  return (this.httpObject.post(`${url}`,data))
}


//all function for booking history
getbookingDetails():Observable<any>
{
let url=this.apiUrl+'bookCustomer/'+this.user.userName
return (this.httpObject.get(`${url}`))
}

getMovieName(data:any):Observable<any>
{
 let url=this.apiUrl+'moviename/'+data
return (this.httpObject.get(`${url}`))
 

}

getTheaterName(data:any):Observable<any>
{
  let url=this.apiUrl+'theatername/'+data
  return (this.httpObject.get(`${url}`))

}


getUserData(data:any):Observable<any>
{
  let url=this.apiUrl+'customerdetails/'+data
  return (this.httpObject.get(`${url}`))
}


}
