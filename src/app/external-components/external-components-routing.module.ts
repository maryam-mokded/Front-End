import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExternalComponentsComponent } from './external-components.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: ExternalComponentsComponent, children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'about', component: AboutComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalComponentsRoutingModule { }
