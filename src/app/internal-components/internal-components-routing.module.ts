import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalComponentsComponent } from './internal-components.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  {
    path: '', component: InternalComponentsComponent, children: [
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'mail-box', component: MailBoxComponent
      },
      {
        path: 'calendar', component: CalendarComponent
      },
      {
        path: '', redirectTo: 'profile', pathMatch: 'full'
      },
      // {
      //   path:'**', component: NotFoundComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalComponentsRoutingModule { }
