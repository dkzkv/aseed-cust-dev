import { Component } from '@angular/core';
import {IntroDomainFacade} from "../../intro-domain.facade";
import {IntroDomainRegistration} from "../../models/intro-domain.enums";

@Component({
  selector: 'as-upload-wrapper',
  templateUrl: './upload-wrapper.component.html',
  styleUrl: './upload-wrapper.component.scss'
})
export class UploadWrapperComponent {
  constructor(public _intoFacade: IntroDomainFacade) {
  }

  protected readonly IntroDomainRegistration = IntroDomainRegistration;
}
