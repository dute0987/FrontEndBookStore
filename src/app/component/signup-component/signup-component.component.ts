import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.scss']
})
export class SignupComponentComponent implements OnInit {
  email:any;
  password:any;
  fullName:any;
  phone:any;
  constructor(private user: UserserviceService,private rout: Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    let reqdata={
      fullName:this.fullName,
      email:this.email,
      password:this.password,
      mobileNumber:this.phone

    }
    this.user.signup(reqdata).subscribe((response:any)=>{
      console.log(response);
      this.snack.open('User Signup Succesfully..!!!','..', {
        duration: 3000,
      });
     
    })

}
}
