import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {IntroDomainRegistration} from '../../models/intro-domain.enums';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {RegistrationDialogComponent} from "../registration-dialog/registration.dialog.component";

@Component({
  selector: 'as-sign-up-wrapper',
  templateUrl: './sign-up-wrapper.component.html',
  styleUrl: './sign-up-wrapper.component.scss'
})
export class SignUpWrapperComponent {
  introDomainRegistration: typeof IntroDomainRegistration = IntroDomainRegistration;

  constructor(private _matDialog: MatDialog) {
  }

  openRegistrationDialog(introDomainRegistration: IntroDomainRegistration) {
    this._matDialog.open(RegistrationDialogComponent, {
      width: '300px',
      height: '500px',
      data: introDomainRegistration
    });
  }
}
