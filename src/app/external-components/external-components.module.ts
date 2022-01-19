import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalComponentsRoutingModule } from './external-components-routing.module';
import { ExternalComponentsComponent } from './external-components.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { NavbarExternalComponent } from '../Components/navbar-external/navbar-external.component';


@NgModule({
  declarations: [
    ExternalComponentsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    NavbarExternalComponent
  ],
  imports: [
    CommonModule,
    ExternalComponentsRoutingModule
  ]
})
export class ExternalComponentsModule { }
