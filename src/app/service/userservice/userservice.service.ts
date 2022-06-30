import { Injectable } from '@angular/core';
import { HttpserviceService } from './../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  token:any;
  constructor(private httpService: HttpserviceService) 
  {this.token = localStorage.getItem('token'); 
 }

  login(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.httpService.postservices('User/login', reqdata, false, header)
  }

  signup(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    return this.httpService.postservices('User/register', reqdata, false, header)
  }

  forgetPassword(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'token'
      })
    }
    console.log(reqdata)
    return this.httpService.postservices(`User/forgot/${reqdata.Email}`, reqdata, false, header)
  }

  resetPassword(reqdata: any, token: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    console.log(reqdata)
    return this.httpService.putService(`User/ResetPassword/${reqdata.newPassword}/${reqdata.confirmPassword}`, reqdata, true, header)
  }
}


