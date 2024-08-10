import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { IntroComponent } from "./components/intro-component/intro-component.component";
import { IntroRoutingModule } from "./intro.routing.module";
import { IntroDataService } from "./services/intro-data.service";


@NgModule({
  declarations: [
    IntroComponent
  ],
  imports: [
    IntroRoutingModule
  ],
  providers: [
    IntroDataService,
    provideHttpClient(withInterceptorsFromDi()),
    
  ]
})
export class IntroModule {
}
