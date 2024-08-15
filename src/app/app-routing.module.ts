import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./presentation/intro/intro.module').then(m => m.IntroModule)
  },
  {
    path: 'workspace',
    loadChildren: () => import('./domain/workspace/workspace.module').then(m => m.WorkspaceModule)
  },
  {
    path: 'post',
    loadChildren: () =>  import('./xxx-post/xxx-post.module').then(m => m.XxxPostModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
