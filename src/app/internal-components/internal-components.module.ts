import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalComponentsRoutingModule } from './internal-components-routing.module';
import { InternalComponentsComponent } from './internal-components.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    InternalComponentsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    InternalComponentsRoutingModule
  ]
})
export class InternalComponentsModule { }
