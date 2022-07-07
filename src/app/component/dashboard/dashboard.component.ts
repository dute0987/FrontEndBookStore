import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  Logout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
    this.snack.open('User LOgout  Succesfully..!!!','..', {
      duration: 3000,
    });
  }

}
