import { Component, OnInit } from '@angular/core';
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
  constructor(private user: UserserviceService,private rout: Router) { }

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
     
    })

}
}
