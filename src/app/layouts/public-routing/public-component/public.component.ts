import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {ThemeService} from '../../../../theme/theme.service';
import {AlertType, AlertUtils} from '../../../../shared/utls/alert.utils';
import {Router} from '@angular/router';
import {RequestService} from '../../../../shared/services/request.service';
import {EndpointUtils} from '../../../../shared/utls/endpoint.utils';

@Component({
  selector: 'fth-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent {

  loginForm: FormGroup;
  registerForm: FormGroup;
  themeMode: number = 0;
  registerMode: boolean = false;
  checkboxValue: boolean = false;

  constructor(private formBuilder: FormBuilder, private themeService: ThemeService, private requestService: RequestService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
    this.registerForm = this.formBuilder.group(
      {
        type: [0],
        name: [null, Validators.required],
        email: [null, Validators.required],
        document: [null, Validators.required],
        login: [null, Validators.required],
        password: [null, Validators.required],
      }
    );
  }

  submitLogin(): void {
    if (this.loginForm.valid) {
      this.requestService.POST<{ message: string, data: any }>(EndpointUtils.Path.USER.authenticate, this.loginForm.value).subscribe((result: { message: string, data: any }) => {
        AlertUtils.Toast(AlertType.SUCCESS, result.message);
        if (!sessionStorage.getItem('token-access')) {
          sessionStorage.setItem('token-access', result.data.token);
          this.router.navigate(['/in']);
        } else {
          this.router.navigate(['/in']);
        }
      });
    } else {
      Object.values(this.loginForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  toggleTheme() {
    this.themeMode === 0 ? this.themeMode = 1 : this.themeMode = 0;
    this.themeService.toggleTheme().then();
  }

  onForgotPasswordClick(): void {
    AlertUtils.Toast(AlertType.WARNING, 'Em manutenção!');
  }

  toggleRegisterMode(): void {
    this.registerMode = !this.registerMode;
  }

  submitRegister(): void {
    if (this.registerForm.valid) {
      this.requestService.POST<{ message: string }>(EndpointUtils.Path.USER.new, this.registerForm.value).subscribe((response: { message: string }) => {
        if (response) {
          AlertUtils.Toast(AlertType.SUCCESS, response.message);
          this.toggleRegisterMode();
          this.loginForm.controls['login'].setValue(this.registerForm.controls['login'].value);
          this.registerForm.reset();
          this.checkboxValue = false;
        }
      });
    } else {
      Object.values(this.registerForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  onCheckboxChange(): void {
    this.registerForm.controls['type'].setValue(!this.checkboxValue ? 0 : 1);
  }
}
