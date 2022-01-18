import { NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate} from '@angular/router';

const routes :Routes =[
  { path: '', loadChildren: () => import('./external-components/external-components.module').then(m => m.ExternalComponentsModule) },
  { path: 'inter', loadChildren: () => import('./internal-components/internal-components.module').then(m => m.InternalComponentsModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule { }
