import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
Name : '';
Surname  : '';
Age  : '';
Date  : '';

  constructor(private router:Router) { 

  }

  ngOnInit() {
  }
 
 
 
  onLogin(){
    console.log(this.Name)
    console.log(this.Surname)
    console.log(this.Age)
    console.log(this.Date)
    this.router.navigate(['detail'],{queryParams:{name: this.Name, surname: this.Surname, age: this.Age, date: this.Date }});


   
  }
}
