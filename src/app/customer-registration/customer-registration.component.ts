import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';
@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  visibility=true
  register=false
  constructor(private authObject:AuthServiceService,private route:Router,private validate:ValidateService) { }

  

  ngOnInit(): void {
  }

  RegisterCustomer(registerData:any)
  {
    if(!this.validate.checkUsername(registerData.userName)) alert("User name should atleast 3 characters and atmost 10 characters...")
    else if(!this.validate.checkPassword(registerData.userPassword)) alert("Password should atleast 3 characters and atmost 10 characters...")
    else if(!this.validate.checkNumber(registerData.userPhoneNumber)) alert("Incorrect phone number...")

    this.register=this.validate.checkUsername(registerData.userName)&&this.validate.checkPassword(registerData.userPassword)&&this.validate.checkNumber(registerData.userPhoneNumber)

    if(this.register==true) {
      this.authObject.registerCustomer(registerData).subscribe((res)=>{
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
