import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InternalComponentsModule } from './internal-components/internal-components.module';
import { NavbarInternalComponent } from './Components/navbar-internal/navbar-internal.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarInternalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
