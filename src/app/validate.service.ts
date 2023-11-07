import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  checkUsername(data:string) {
    if(data.length<3 || data.length>15) return(false);
    return(true);
  }

  checkPassword(data:string) {
    if(data.length<3 || data.length>10) return(false);
    return(true);
  }

  checkNumber(data:string) {
    if(data.length!=10) return(false);

    for(var i=0;i<data.length;i++) {
      if(data[i]<'0' || data[i]>'9') return(false);
    }return(true);
  }

  checkTiming(data1:any,data2:any,data3:any) {
    console.log("hi")
    if(data1==""||data2==""||data3=="") return(false);
    console.log("HI")
    if((data1==data2)||(data2==data3)||(data3==data1)) return(false);
    console.log("last")
    return(true);
  }
}
