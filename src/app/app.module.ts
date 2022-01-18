import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InternalComponentsModule } from './internal-components/internal-components.module';
import { ExternalComponentsModule } from './external-components/external-components.module';
import { NavbarInternalComponent } from './Components/navbar-internal/navbar-internal.component';
import { NavbarExternalComponent } from './Components/navbar-external/navbar-external.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarInternalComponent,
    NavbarExternalComponent,
  ],
  imports: [
    BrowserModule,
    InternalComponentsModule,
    ExternalComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
