import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BloodBankManagerLoginDTO } from '../../dto/BloodBankManagerLoginDTO';
import { ChangePasswordDTO } from '../../dto/ChangePasswordDTO';
import { ChangePasswordService } from '../../services/change-password.service';

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
  isDummyPassword = false;
  checkCredentialsDTO: BloodBankManagerLoginDTO;
  changePasswordDTO: ChangePasswordDTO;

  constructor(private service: ChangePasswordService, private router: Router) {
    this.checkCredentialsDTO = {
      Email: '',
      Password: '',
    };
    this.changePasswordDTO = {
      Email: '',
      OldPassword: '',
      NewPassword: '',
    };
  }
  ngOnInit(): void {}

  checkCredentials(): void {
    this.checkCredentialsDTO.Email = this.email;
    this.checkCredentialsDTO.Password = this.oldPassword;
    this.service.checkCredentials(this.checkCredentialsDTO).subscribe(
      (res) => {
        if (!res) {
          this.service.showSuccess('You already changed dummy password.');
          this.router.navigate(['']);
        } else {
          this.credentialsCorrect = true;
          this.showWrongUsernameOrPass = false;
        }
      },
      (err) => {
        this.showWrongUsernameOrPass = true;
      }
    );
  }

  changePassword(): void {
    if (!this.showError) {
      this.changePasswordDTO.Email = this.email;
      this.changePasswordDTO.OldPassword = this.oldPassword;
      this.changePasswordDTO.NewPassword = this.newPassword;
      this.service.changePassword(this.changePasswordDTO).subscribe(
        (res) => {
          this.service.showSuccess('Your successfully changed password.');
          this.router.navigate(['']);
        },
        (err) => this.service.showError('Username or password is incorect.')
      );
    }
  }

  matchPassword(): void {
    if (this.newPassword !== this.repeatNewPassword) this.showError = true;
    else this.showError = false;
  }
}
