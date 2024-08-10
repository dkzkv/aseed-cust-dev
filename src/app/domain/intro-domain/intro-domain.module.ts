import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IntroBodyComponent} from "./components/intro-body/intro-body.component";
import {IntroFooterComponent} from "./components/intro-footer/intro-footer.component";
import {IntroHeaderComponent} from "./components/intro-header/intro-header.component";
import {CoreMatModule} from "../../infrastructure/modules/core-material/core-material.module";
import {SignUpWrapperComponent} from "./components/sign-up-wrapper/sign-up-wrapper.component";
import {RegistrationDialogComponent} from "./components/registration-dialog/registration.dialog.component";
import {UploadWrapperComponent} from "./components/upload-wrapper/upload-wrapper.component";
import {IntroDataService} from "./services/intro-data.service";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";



@NgModule({
  declarations: [
    IntroBodyComponent,
    IntroFooterComponent,
    IntroHeaderComponent,
    SignUpWrapperComponent,
    RegistrationDialogComponent,
    UploadWrapperComponent,
  ],
  imports: [
    CommonModule,
    CoreMatModule,
  ],
  providers:[
    IntroDataService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
  exports:[
    IntroBodyComponent,
    IntroFooterComponent,
    IntroHeaderComponent,
    UploadWrapperComponent
  ]
})
export class IntroDomainModule { }
