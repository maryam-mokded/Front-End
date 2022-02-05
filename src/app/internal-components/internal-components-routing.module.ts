import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalComponentsComponent } from './internal-components.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DirectionListComponent } from './direction-list/direction-list.component';
import { DirectionDetailsComponent } from './direction-details/direction-details.component';
import { FormationListComponent } from './formation-list/formation-list.component';


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
        path: 'directions-list', component: DirectionListComponent
      },
      {
        path: 'formations-list', component: FormationListComponent
      },
      {
        path: 'directions-details/:id', component: DirectionDetailsComponent
      },
      {
        path: 'mail-box', component: MailBoxComponent
      },
      {
        path: 'employees-list', component: EmployeesListComponent
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
