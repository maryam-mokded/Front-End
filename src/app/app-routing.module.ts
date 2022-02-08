import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsAuthGuard } from './guards/is-auth.guard';

const routes :Routes =[
  { path: '', loadChildren: () => import('./external-components/external-components.module').then(m => m.ExternalComponentsModule) },
  { path: 'inter', loadChildren: () => import('./internal-components/internal-components.module').then(m => m.InternalComponentsModule)},
  { path:'**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
