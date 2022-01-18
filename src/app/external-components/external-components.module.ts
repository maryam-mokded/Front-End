import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalComponentsRoutingModule } from './external-components-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ExternalComponentsRoutingModule
  ]
})
export class ExternalComponentsModule { }
