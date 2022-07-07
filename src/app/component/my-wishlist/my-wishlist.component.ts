import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.scss']
})
export class MyWishlistComponent implements OnInit {
  wishArray:any;
  UserId:any;
  constructor(private bookService: BookserviceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getAllwishlist();
  }

  getAllwishlist() {  
    let reqdata = {
      userId: this.UserId,
    };
    this.bookService.getAllwishlist(reqdata).subscribe((response: any) => {
      console.log(response);
      this.wishArray = response.response; 
      console.log(this.wishArray);
      this.snack.open('All Wishlist get Succesfully..!!!','..', {
        duration: 3000,
      });
     
    });
  }
  removewishlist(wishlistId:any){
    let reqdata={
      WishlistId:wishlistId
    }
    this.bookService.removewishlist(reqdata).subscribe((response: any) => {
      console.log(response);
      this. getAllwishlist();
      this.snack.open('Item remove from wishlist get Succesfully..!!!','..', {
        duration: 3000,
      });
     
    });
  }
}
