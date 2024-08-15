import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AseedLayoutRoutingModule } from './workspace-routing.model';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { AseedLayoutModule } from 'src/app/application/modules/aseed-layout/aseed-layout.module';



@NgModule({
  declarations: [
    WorkspaceComponent
  ],
  imports: [
    CommonModule,
    AseedLayoutRoutingModule,
    AseedLayoutModule
  ]
})
export class WorkspaceModule { }
