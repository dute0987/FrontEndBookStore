import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  Email:any;
  constructor(private user: UserserviceService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    let reqdata={
      Email:this.Email,
    }
    console.log(reqdata.Email)
    this.user.forgetPassword(reqdata).subscribe((response:any)=>{
      console.log(response);
    })
      
  }

}
