import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  Email:any;
  constructor(private user: UserserviceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    let reqdata={
      Email:this.Email,
    }
    console.log(reqdata.Email)
    this.user.forgetPassword(reqdata).subscribe((response:any)=>{
      console.log(response);
      this.snack.open('User Fetching Forgot Password Succesfully..!!!','..', {
        duration: 3000,
      });
    })
      
  }

}
