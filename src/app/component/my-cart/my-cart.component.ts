import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  cartArray: any;
  bookarray: any;
  show=false;
  addshow=false;
  order=false;
  AddressArray:any;
  TypeId:any;
  AddressId:any;
  address:any;
  value:any;
  city:any;
  state:any

  constructor(private bookService: BookserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getAllcart();
    this.GetAddress();
  }
  ordershow(){
    console.log("calling hide")
    this.order=!this.order
  }

  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }
  addshowhide(){
    console.log("calling hide")
    this.addshow=!this.addshow
  }
  getAllcart() {

    this.bookService.getAllCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response;
      console.log(this.cartArray);

    });
  }

  removecart(cartId: any) {
    let reqdata = {
      CartId: cartId
    }
    this.bookService.deletcart(reqdata).subscribe((response: any) => {
      console.log(response);
      this.getAllcart()

    });
  }

  updateToAdd(cartId: any, bookQuantity: any, bookId: any) {
    let data = {
      bookQuantity: (bookQuantity + 1),
      bookId: bookId,
    }
    console.log("add")
    if (bookQuantity >= 0) {
      this.bookService.updateToLess(cartId, data).subscribe((response: any) => {
        console.log(response);
        this.getAllcart()
      });
    }
  }

  updateToLess(cartId:any,bookQuantity:any,bookId:any){
    let data={
      bookQuantity:(bookQuantity-1),
      bookId:bookId,
    } 
    if(bookQuantity !=1 && bookQuantity !=0  ){
    this.bookService.updateToLess(cartId,data).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
    });}
  }

  GetAddress(){
    this.bookService.getAddress().subscribe((response: any) => {
      console.log(response);
      this.AddressArray = response.response;
      // this.TypeId = this.AddressArray[0].typeId;
      console.log(this.AddressArray);

    });
  }

  Addaddress(){
    let data={
      address:this.address,
      typeId:this.value,
      city:this.city,
      state:this.state

    }
    this.bookService.addAddress(data).subscribe(
      (response: any) => {
        console.log('Add to continues order', response);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addToOrder(BookId:any,bookQuantity:any) {
    let data = {
      bookId: BookId,
      addressId:this.AddressId,
      bookQuantity:bookQuantity,
    }
    console.log(data)
    this.bookService.addToOrder(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
}
