import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {
  apiUrl='http://localhost:3000/';
  owner:any
  editTheater:any;

  constructor(private httpObject:HttpClient) { }



  registerOwner(data:any):Observable<any>
  {
    let url=this.apiUrl+'owner';
    return this.httpObject.post(`${url}`,data)
  }



  checkOwnerUsername(userName:string):Observable<any>
  {
    let url=this.apiUrl+'owner/'+userName
   
    return( this.httpObject.get(`${url}`));
 
  }


  getOwnerTheaters():Observable<any>
  {
    let url=this.apiUrl+'theater/'+this.owner.ownerUserName;
    return( this.httpObject.get(`${url}`));

  }


  getCity():Observable<any>
  {
    let url=this.apiUrl+'city'
    return( this.httpObject.get(`${url}`));
  }

  //get all timing from db
  getTime():Observable<any>
  {
    let url=this.apiUrl+'time'
    return( this.httpObject.get(`${url}`));
  }
  
  getMovies():Observable<any>
  {
    let url=this.apiUrl+'movies'
    return( this.httpObject.get(`${url}`));
  }


addTheaters(data:any,theaterId:any):Observable<any>
{
  let url=this.apiUrl+'theater/'+this.owner.ownerUserName+'/'+theaterId;
  return this.httpObject.post(`${url}`,data)

}

addTheaterTime(data:any):Observable<any>
{
  let url=this.apiUrl+'addtime';
  return this .httpObject.post(`${url}`,data);
}



getMaxTheaterId():Observable<any>
{
  let url=this.apiUrl+'theaterId';
  return this.httpObject.get(`${url}`)
}


//function get theater time and seats available
getTheaterTimeSeats():Observable<any>
{
  let url=this.apiUrl+'theatertime/'+this.editTheater.theaterId;
  return this.httpObject.get(`${url}`)

}

getCurrentMovie():Observable<any>
{
  let url=this.apiUrl+'currentmovie/'+this.editTheater.theaterId;
  return this.httpObject.get(`${url}`)
}


//change seat at particular time of particulaetheater
changeTheaterSeat(data:any):Observable<any>
{
  let url=this.apiUrl+'changeseat'
  return this.httpObject.put(`${url}`,data)
}

changeMovie(data:any):Observable<any>
{
  let url=this.apiUrl+'changemovie';
  return this.httpObject.put(`${url}`,data)

}

changeAdress(data:any):Observable<any>
{
  
  let url=this.apiUrl+'changeaddress';
  return this.httpObject.put(`${url}`,data)
}



changeTheaterName(data:any):Observable<any>
{
  
  let url=this.apiUrl+'changetheatername';
  return this.httpObject.put(`${url}`,data)
}

//current  theater  timing for update
deleteCurrentTime()
{
  let url=this.apiUrl+'deletetime/'+this.editTheater.theaterId;
  return this.httpObject.delete(`${url}`)
}

//change theaterseat in theater  table
changeTotalTheaterSeat(data:any):Observable<any>
{
  let url=this.apiUrl+'newtheaterseat';
  return this.httpObject.put(`${url}`,data)



}


deleteTheater():Observable<any>
{
  let url=this.apiUrl+'deletetheater/'+this.editTheater.theaterId;
  return this.httpObject.delete(`${url}`)
}


//change price
changePrice(data:any):Observable<any>
{
  let url=this.apiUrl+'price/'+this.editTheater.theaterId
  return this.httpObject.put(`${url}`,data)
}



getBookingDetails():Observable<any>
{
  let url=this.apiUrl+'bookTheater/'+this.editTheater.theaterId
  return this.httpObject.get(`${url}`)
}
}
