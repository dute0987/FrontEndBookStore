import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  bookarray: any = [];
 
  Book:any;
  
  constructor(private router: Router,private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.getAllBook();
  }
  getAllBook() {
    this.bookService.getAllBooksService().subscribe((response: any) => {
      console.log(response);
      this.bookarray = response.response;
      this.bookarray.reverse();
      console.log(this.bookarray);
    });
  }

  lowtohigh(){
    this.bookarray= this.bookarray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }

  hightolow(){
    this.bookarray= this.bookarray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newcoming(){
    this.bookarray.reverse();
  }

  quickview(Book:any){  
    localStorage.setItem('bookId', Book.bookId); 
    this.router.navigateByUrl('dashboard/quickview')
  }
}
