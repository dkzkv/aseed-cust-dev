import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import {IntroDomainRegistration} from "./models/intro-domain.enums";
import {RegistrationDialogComponent} from "./components/registration-dialog/registration.dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Injectable()
export class IntroDomainFacade
{
  constructor(public _matDialog: MatDialog) {
  }

  openRegistrationDialog(introDomainRegistration: IntroDomainRegistration) {
    this._matDialog.open(RegistrationDialogComponent, {
      width: '400px',
      height: '600px',
      data: introDomainRegistration
    });
  }
}
