import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
firstname = '';
Surname = '';
Age = '';
Date = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      this.firstname =params['name'];
      this.Surname =params['surname'];
      this.Age =params['age'];
      this.Date = params['date'];
      console.log(this.firstname);
      console.log(this.Surname)
      console.log(this.Age)
      console.log(this.Date)
    });

  
  }
}

  
