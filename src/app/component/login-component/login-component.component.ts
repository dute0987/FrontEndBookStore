import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice/userservice.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  token:any;
  email:any;
  password:any;
  constructor(private user: UserserviceService,private rout: Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    let reqdata={
      email:this.email,
      password:this.password,
    }
    this.user.login(reqdata).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data.token);
      this.rout.navigateByUrl('/dashboard');
      this.snackBar.open('Login Successfully..!!!','..', {
        duration: 3000,
      });
    })

}
}
