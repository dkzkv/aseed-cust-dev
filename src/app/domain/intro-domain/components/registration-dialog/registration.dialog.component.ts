import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService, AuthStatus} from "../../../../infrastructure/services/auth.service";
import {AuthStatusMessages} from "../../../../infrastructure/models/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dialog',
  templateUrl: './registration.dialog.component.html',
  styleUrls: ['./registration.dialog.component.scss']
})
export class RegistrationDialogComponent {
  form: FormGroup;
  isSignUp = true; // Контролирует, находится ли окно в режиме регистрации
  hidePassword = true;
  errorMessage: string = ''; // Сообщение об ошибке

  constructor(private fb: FormBuilder, public _authService: AuthService, public _router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleMode() {
    this.isSignUp = !this.isSignUp;

    if (!this.isSignUp) {
      this.form.get('name')?.clearValidators();
      this.form.get('name')?.updateValueAndValidity();
    } else {
      this.form.get('name')?.setValidators([Validators.required]);
      this.form.get('name')?.updateValueAndValidity();
    }
  }

  onSubmit() {
    if (this.form.valid) {

      this._authService[this.isSignUp ? 'signUp' : 'signIn'](this.form.value)
        .subscribe(r => this.propagateAuth(r))

      console.log(this.form.value);
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }

  private propagateAuth(response) {
    if (response.status !== AuthStatus.Success) {
      this.errorMessage = AuthStatusMessages[response.status];
      return
    }

    this._router.navigate(["user"])

  }

  onForgotPassword() {
    const emailControl = this.form.get('email');

    if (!emailControl?.value) {
      emailControl?.markAsTouched();
      emailControl?.setErrors({required: true});
      this.errorMessage = 'Please enter your email address.';
    } else {
      // Логика для восстановления пароля
      console.log('Password reset link sent to', emailControl.value);
    }
  }
}
