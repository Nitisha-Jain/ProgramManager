import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PersonalCalendarComponent } from './personal-calendar/personal-calendar.component';
import { AssigneeComponent } from './assignee/assignee.component';
import { AssigneeCalendarComponent } from './assignee-calendar/assignee-calendar.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/products', pathMatch: 'full'
  },
  {
    path: 'products', component: ProductComponent
  },
  {
    path: 'productform', component: ProductFormComponent
  }
  , {
    path: 'calendar', component: CalendarComponent
  },
  {
    path: 'personalcalendar', component: PersonalCalendarComponent
  }
  , {
    path: 'assignee', component: AssigneeComponent
  },
  {
    path: 'assigneecalendar', component: AssigneeCalendarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
