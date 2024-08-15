import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { WorkspaceComponent } from './components/workspace/workspace.component';

const routes: Routes = [
  {
    path: '',
    component: WorkspaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseedLayoutRoutingModule {
}
