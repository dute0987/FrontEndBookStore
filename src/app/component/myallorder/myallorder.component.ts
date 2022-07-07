import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/service/bookservice/bookservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-myallorder',
  templateUrl: './myallorder.component.html',
  styleUrls: ['./myallorder.component.scss']
})
export class MyallorderComponent implements OnInit {
  OrderArray:any;
  constructor(private bookService:BookserviceService,private snack: MatSnackBar) { }
 
  ngOnInit(): void {
    this.getOrder();
  }
  getOrder() {
    this.bookService.GetOrder().subscribe((response: any) => {
      console.log(response);
      this.OrderArray = response.response;
      console.log("Order Array",this.OrderArray);
      this.snack.open('All Order get Succesfully..!!!','..', {
        duration: 3000,
      });

    });
  }

}
