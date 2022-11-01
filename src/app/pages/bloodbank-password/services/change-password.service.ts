import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BloodBankManagerLoginDTO } from '../dto/BloodBankManagerLoginDTO';
import { ChangePasswordDTO } from '../dto/ChangePasswordDTO';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  apiString: string = 'http://localhost:5000';
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  checkCredentials(bbDto: BloodBankManagerLoginDTO) {
    return this.http.post(`${this.apiString}/api/BloodBank/Login`, bbDto);
  }
  changePassword(bbDto: ChangePasswordDTO) {
    return this.http.post(
      `${this.apiString}/api/BloodBank/ChangePassword`,
      bbDto
    );
  }

  public showSuccess(message: string) {
    this.toastr.success(message);
  }

  public showError(message: string) {
    this.toastr.error(message, 'Error');
  }
}
