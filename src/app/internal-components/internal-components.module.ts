import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalComponentsRoutingModule } from './internal-components-routing.module';
import { InternalComponentsComponent } from './internal-components.component';
import { ProfileComponent } from './profile/profile.component';

import { NavbarInternalComponent } from '../Components/navbar-internal/navbar-internal.component';
import { SidebarInternalComponent } from '../Components/sidebar-internal/sidebar-internal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DirectionListComponent } from './direction-list/direction-list.component';
import { DirectionDetailsComponent } from './direction-details/direction-details.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { HistoriqueComponent } from './historique/historique.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NotificationsComponent } from './notifications/notifications.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    InternalComponentsComponent,
    ProfileComponent,
    NavbarInternalComponent,
    SidebarInternalComponent,
    DashboardComponent,
    MailBoxComponent,
    EmployeesListComponent,
    DirectionListComponent,
    DirectionDetailsComponent,
    FormationDetailsComponent,
    HistoriqueComponent,
    FormationListComponent,
    AddFormationComponent,
    UpdateFormationComponent,
    NotificationsComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    InternalComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule

  ]
})
export class InternalComponentsModule { }
