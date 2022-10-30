import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  credentialsCorrect = false;
  email: string = '';
  oldPassword: string = '';
  newPassword: string = '';
  repeatNewPassword: string = '';
  showError = false;
  showWrongUsernameOrPass = false;

  constructor() {}

  ngOnInit(): void {}

  checkCredentials(): void {
    if (this.email === 'zika' && this.oldPassword === '123') {
      this.credentialsCorrect = true;
      this.showWrongUsernameOrPass = false;
    } else {
      this.showWrongUsernameOrPass = true;
    }
  }

  changePassword(): void {
    if (!this.showError) {
      //TODO send http
    }
  }

  matchPassword(): void {
    if (this.newPassword !== this.repeatNewPassword) this.showError = true;
    else this.showError = false;
  }
}
