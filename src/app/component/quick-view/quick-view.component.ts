import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';

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
  constructor( private bookservice: BookserviceService,private router: Router) { }

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
      console.log(this.bookarray);
    });
  }
  hideAndShow(){
    this.show=!this.show
  }

}
