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

  addFeadback(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices('Feedback/AddFeedback', data,true, header);
  }



  getfeedBack(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
        
      }),
      
    };
    console.log(reqdata);
    return this.httpService.getService( `Feedback/GetFeedback/${reqdata.bookId}`, true,header );
    
  }

  addToBag(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices(`Cart/AddCart/${reqdata.userId}`,reqdata,true, header);
  }

  addwishlist(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices('WishList/AddWishList', reqdata,true, header);
  }

  getAllCart() {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })
    }
    return this.httpService.getService(`Cart/GetCartDetailsByUserid`,true,header)
    
  }

  deletcart(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({     
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),  
    };
    console.log(reqdata)  
    return this.httpService.deleteService( `Cart/DeleteCart/${reqdata.CartId}`,true,header );   
  }

  updateToLess(cartId:any,data: any) {
    console.log(data,cartId);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices(`Cart/UpdateCart/${cartId}`, data,true, header);
  }

  removewishlist(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
      
    };
    console.log(reqdata)
    return this.httpService.deleteService( `WishList/DeleteWishList/${reqdata.WishlistId}`,  true,header );
  }
  getAllwishlist(reqdata:any){

    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
    
    return this.httpService.postservices(`WishList/GetWishlistDetailsByUserid/${reqdata.userId}`,reqdata,true,header)
    
  }

  getAddress(){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Address/GetAllAddresses', true, header)
  }

  addAddress(data:any){
    this.token = localStorage.getItem('token')
    console.log(data);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
     
    }
    console.log(data);
    return this.httpService.postservices('Address/AddAddress',data, true, header)
  }

  addToOrder(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices('Order/AddOrder', data,true, header);
  }

  GetOrder(){
    this.token = localStorage.getItem('token')
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('Order/GetAllOrder', true, header)
  }

}

