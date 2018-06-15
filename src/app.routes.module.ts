import { ViewComponent } from "./app/component/view/view.component";
import { BookingformComponent } from "./app/component/bookingform/bookingform.component";
import { DetailComponent } from "./app/component/detail/detail.component";
import { EventsComponent } from "./app/component/events/events.component";


export const AppRoute=[
    {path:'', component: BookingformComponent},
    {path: 'detail', component: DetailComponent,children:[
    
        {path:'events', component: EventsComponent},
        {path:'view', component: ViewComponent},
    ]}

];