import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../services/email.service';
import { ResetPasswordDTO } from '../../interface/ResetPasswordDTO';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss']
})
export class ResetPasswordPageComponent{
  password: string;
  confirm: string;

  constructor(private emailService: EmailService, 
              private route: ActivatedRoute,
              private toastr: ToastrService) { }

  token = this.route.snapshot.queryParams['token'];
  email = this.route.snapshot.queryParams['email'];

  onSubmit(){
    const dto: ResetPasswordDTO = {
      password: this.password,
      confirmPassword: this.confirm,
      token: this.token,
      email: this.email
    }
  
    this.emailService.resetPassword(dto).subscribe(
      (response: any) =>{
        this.toastr.success("Your password has been successfully changed")
      },
      (error:HttpErrorResponse) => {
       this.toastr.error(error.message)
      })
  }

}
