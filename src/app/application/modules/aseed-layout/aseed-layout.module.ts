import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AseedLayoutComponent } from './components/aseed-layout/aseed-layout.component';
import { AseedLayoutRoutingModule } from './aseed-layout-routing.model';



@NgModule({
  declarations: [
    AseedLayoutComponent
  ],
  exports: [
    AseedLayoutComponent
  ],
  imports: [
    CommonModule,
    AseedLayoutRoutingModule
  ]
})
export class AseedLayoutModule { }
