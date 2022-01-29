import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalComponentsRoutingModule } from './internal-components-routing.module';
import { InternalComponentsComponent } from './internal-components.component';
import { ProfileComponent } from './profile/profile.component';

import { NavbarInternalComponent } from '../Components/navbar-internal/navbar-internal.component';
import { SidebarInternalComponent } from '../Components/sidebar-internal/sidebar-internal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MailBoxComponent } from './mail-box/mail-box.component';


@NgModule({
  declarations: [
    InternalComponentsComponent,
    ProfileComponent,
    NavbarInternalComponent,
    SidebarInternalComponent,
    DashboardComponent,
    MailBoxComponent
  ],
  imports: [
    CommonModule,
    InternalComponentsRoutingModule
  ]
})
export class InternalComponentsModule { }
