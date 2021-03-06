import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  BookId:any;
  bookarray: any = [];
  Book:any;
  show:any;
  rating:any;
  comment:any;
  booksArr:any;
  bookQuantity:any;
  value = 0;
  values=1;
  name = 'Angular ' + VERSION.major;
  
  constructor( private bookservice: BookserviceService,private router: Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId');
    this.getAllBook();
  }

  getAllBook() {
    let reqdata = {
      bookId: this.BookId,
    };
    this.bookservice.getBookById(reqdata).subscribe((response: any) => {
      console.log(response);
      this.bookarray = response.response;
      this.getFeedback();
      console.log(this.bookarray);
      this.snack.open('All Book get Succesfully..!!!','..', {
        duration: 3000,
      });
    });
  }
  hideAndShow(){
    this.show=!this.show
  }

  addFeedback() {
    let data = {
      rating: this.rating,
      comment: this.comment,
      bookId: this.BookId,
    };
    this.bookservice.addFeadback(data).subscribe(
      (response: any) => {
        console.log('User Feedback', response);
        this.getFeedback();
        this.snack.open('FeedBack Added Succesfully..!!!','..', {
          duration: 3000,
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getFeedback() {
    let reqdata = {
      bookId: this.BookId,
    };
    console.log("fead")

    this.bookservice.getfeedBack(reqdata).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.booksArr = response.response;
      console.log(this.booksArr);
      this.snack.open('All FeedBack get Succesfully..!!!','..', {
        duration: 3000,
      });
     
    });
  }
  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  addToBag() {
    let reqdata = {
      bookId: this.BookId,
      bookQuantity:this.bookQuantity
    }
    this.bookservice.addToBag(reqdata).subscribe(
      (response: any) => {
        console.log('Added to cart', response);
        this.snack.open('Book Added to Cart Succesfully..!!!','..', {
          duration: 3000,
        });   
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  addToWishList() {
    let reqdata = {
      bookId: this.BookId,
     
    }
    this.bookservice.addwishlist(reqdata).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        this.snack.open('Book Added to WishList Succesfully..!!!','..', {
          duration: 3000,
        });
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
