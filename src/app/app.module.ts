import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HistoryComponent } from '../app/external-components/history/history.component';
import { TeamComponent } from '../app/external-components/team/team.component';
import { HomeComponent } from '../app/external-components/home/home.component';
import { AboutComponent } from '../app/external-components/about/about.component';
import { ContactComponent } from '../app/external-components/contact/contact.component';
import { LoginComponent } from '../app/external-components/login/login.component';
import { NavbarExternalComponent } from './Components/navbar-external/navbar-external.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    HistoryComponent,
    TeamComponent,
    NavbarExternalComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
