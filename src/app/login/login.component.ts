import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import {HttpClient} from '@angular/common/http';
import { ParseSourceFile } from '@angular/compiler';
import { Router} from '@angular/router';
import { OwnerserviceService } from '../ownerservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  responseData:any
  
  constructor(private authServiceObject:AuthServiceService,private ownerAuthObject:OwnerserviceService,private router :Router) { }

  ngOnInit(): void {
   
    
  }

  login(loginData:any)
  {
    //customer
     if(loginData.role=='c')
     {
      this.authServiceObject.checkCustomerUsername(loginData.userName).subscribe((res)=>{
        this.responseData=res.data[0]

        if(res.data=="401")
        {
         alert("UserName not  found")
        }
        else if(this.responseData.userPassword==loginData.userPassword)
        {
          this.authServiceObject.user=this.responseData
         this.router.navigate(['customerhomepage']);
        }
        else
        {
        alert("Check the Credential")
        }
           });
    }
    if(loginData.role=='h')
    {
      this.ownerAuthObject.checkOwnerUsername(loginData.userName).subscribe((res)=>{
        this.responseData=res.data[0]
      console.log(res.data[0])
        if(res.data=="401")
        {
         alert("UserName not  found")
        }
        else if(this.responseData.ownerPassword==loginData.userPassword)
        {
          this.ownerAuthObject.owner=this.responseData;
         this.router.navigate(['ownerhome']);
        }
        else
        {

        alert("Check the Credential")
        }
    });

    }
    
  }

  navigateCustomerRegistration()
  {
    this.router.navigate(['customerregistraion']);
  }

  navigateOwnerRegistration()
  {
    this.router.navigate(['ownerregistration'])
  }
}
