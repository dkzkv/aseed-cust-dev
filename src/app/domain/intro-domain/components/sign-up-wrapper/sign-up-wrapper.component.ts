import {Component} from '@angular/core';
import {IntroDomainRegistration} from '../../models/intro-domain.enums';
import {IntroDomainFacade} from "../../intro-domain.facade";

@Component({
  selector: 'as-sign-up-wrapper',
  templateUrl: './sign-up-wrapper.component.html',
  styleUrl: './sign-up-wrapper.component.scss'
})
export class SignUpWrapperComponent {
  introDomainRegistration: typeof IntroDomainRegistration = IntroDomainRegistration;

  constructor(public _intoFacade: IntroDomainFacade) {
  }
}
