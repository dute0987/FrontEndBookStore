import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  token: any;
  constructor(private httpService: HttpserviceService) {this.token = localStorage.getItem('token'); }

  getAllBooksService() {

    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService(`Book/GetAllBook`, true, header)
  }

  getBookById(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }), 
    };   
    return this.httpService.getService( `Book/GetBookByBookId/${reqdata.bookId}`, true,header );  
  }
}
