import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalComponentsRoutingModule } from './external-components-routing.module';
import { ExternalComponentsComponent } from './external-components.component';

@NgModule({
  declarations: [
    ExternalComponentsComponent,
  ],
  imports: [
    CommonModule,
    ExternalComponentsRoutingModule
  ]
})
export class ExternalComponentsModule { }
