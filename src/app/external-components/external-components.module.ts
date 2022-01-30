import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalComponentsRoutingModule } from './external-components-routing.module';
import { ExternalComponentsComponent } from './external-components.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


import { HistoryComponent } from '../../app/external-components/history/history.component';
import { TeamComponent } from '../../app/external-components/team/team.component';
import { HomeComponent } from '../../app/external-components/home/home.component';
import { AboutComponent } from '../../app/external-components/about/about.component';
import { ContactComponent } from '../../app/external-components/contact/contact.component';
import { LoginComponent } from '../../app/external-components/login/login.component';
import { NavbarExternalComponent } from '../Components/navbar-external/navbar-external.component';


@NgModule({
  declarations: [
    ExternalComponentsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HistoryComponent,
    TeamComponent,
    NavbarExternalComponent,
  ],
  imports: [
    CommonModule,
    ExternalComponentsRoutingModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExternalComponentsModule { }
