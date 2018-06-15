import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BookingformComponent } from './component/bookingform/bookingform.component';
import {RouterModule} from '@angular/router';
import { ViewComponent } from './component/view/view.component';
import { AppRoute } from '../app.routes.module';
import { DetailComponent } from './component/detail/detail.component';
import { EventsComponent } from './component/events/events.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    BookingformComponent,
    ViewComponent,
    DetailComponent,
    EventsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoute),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
