import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-my-wishlist',
  templateUrl: './my-wishlist.component.html',
  styleUrls: ['./my-wishlist.component.scss']
})
export class MyWishlistComponent implements OnInit {
  wishArray:any;
  UserId:any;
  constructor(private bookService: BookserviceService) { }

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
     
    });
  }
  removewishlist(wishlistId:any){
    let reqdata={
      WishlistId:wishlistId
    }
    this.bookService.removewishlist(reqdata).subscribe((response: any) => {
      console.log(response);
      this. getAllwishlist();
     
    });
  }
}
