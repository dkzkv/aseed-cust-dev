import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { IntroComponent } from './components/intro-component/intro-component.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule {
}
