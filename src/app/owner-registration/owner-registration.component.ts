import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from '../ownerservice.service';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-owner-registration',
  templateUrl: './owner-registration.component.html',
  styleUrls: ['./owner-registration.component.css']
})
export class OwnerRegistrationComponent implements OnInit {
  visibility=true;
  register=false
  constructor(public authObject:OwnerserviceService,public route:Router,private validate:ValidateService) { }

  ngOnInit(): void {
  }


  RegisterCustomer(registerData:any)
  {

    if(!this.validate.checkUsername(registerData.ownerUserName)) alert("User name should atleast 3 characters and atmost 10 characters...")
    else if(!this.validate.checkPassword(registerData.ownerPassword)) alert("Password should atleast 3 characters and atmost 10 characters...")
    else if(!this.validate.checkNumber(registerData.ownerPhoneNumber)) alert("Incorrect phone number...")

    this.register=this.validate.checkUsername(registerData.ownerUserName)&&this.validate.checkPassword(registerData.ownerPassword)&&this.validate.checkNumber(registerData.ownerPhoneNumber)

    if(this.register==true) {
      this.authObject.registerOwner(registerData).subscribe((res)=>{
        if(res.data==200)
        {
          this.visibility=false
        }
        else
        {
          alert("UserName Exist")
        }
        
        })
    }
  }

  routeBackLogin()
  {
    this.route.navigate(['login'])
  }

}
