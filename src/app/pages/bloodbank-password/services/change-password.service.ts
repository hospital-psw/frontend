import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { BloodBankManagerLoginDTO } from '../dto/BloodBankManagerLoginDTO';
import { ChangePasswordDTO } from '../dto/ChangePasswordDTO';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordService {
  apiString: string = environment.apiBloodBankUrl;
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  checkCredentials(bbDto: BloodBankManagerLoginDTO) {
    return this.http.post(`${this.apiString}/Login`, bbDto);
  }
  changePassword(bbDto: ChangePasswordDTO) {
    return this.http.post(
      `${this.apiString}/ChangePassword`,
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
