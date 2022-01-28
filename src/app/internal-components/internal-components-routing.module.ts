import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InternalComponentsComponent } from './internal-components.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: InternalComponentsComponent, children: [
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: '', redirectTo: 'profile', pathMatch: 'full'
      },
      {
        path:'**', component: NotFoundComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalComponentsRoutingModule { }
