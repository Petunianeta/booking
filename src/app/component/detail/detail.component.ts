import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  firstname : '';
  Surname  : '';
  Age  : '';
  Date  : '';
  
  pages=[

    {name: 'events', page: 'events'},
    {name:'view', page: 'view'},
  
  ]
  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params =>{

      this.firstname =params['name'];
      this.Surname =params['surname'];
      this.Age =params['age'];
      this.Date = params['date'];

      console.log(this.firstname)
      console.log(this.Surname)
      console.log(this.Age)
      console.log(this.Date)
    });
  }
}
