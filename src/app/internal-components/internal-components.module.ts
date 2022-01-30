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


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    InternalComponentsComponent,
    ProfileComponent,
    NavbarInternalComponent,
    SidebarInternalComponent,
    DashboardComponent,
    MailBoxComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    InternalComponentsRoutingModule
  ]
})
export class InternalComponentsModule { }
