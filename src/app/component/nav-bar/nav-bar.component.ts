import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  @Input() page; //FOR PAGES
  @Input() name; // FOR PAGES

  //FOR USER
  @Input() firstname;
  @Input() surname;
  @Input() age;
  @Input() date;
  
 
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(){
    console.log(this.firstname)
      console.log(this.surname)
      console.log(this.age)
      console.log(this.date)

    if( this.name === "events"){
  
      this.router.navigate(['detail/events']);
    }else if(this.name === 'view'){
     //this.router.navigate(['detail/view']);
        this.router.navigate(['detail/view'],{queryParams:{name: this.firstname, surname: this.surname, age: this.age, date: this.date }})
      }
    } 
}

