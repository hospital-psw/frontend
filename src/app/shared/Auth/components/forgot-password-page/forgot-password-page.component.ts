import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { ForgotPasswordDTO } from '../../interface/ForgotPasswordDTO';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {

  constructor(private emailService: EmailService, 
              private toastr: ToastrService,
              private router: Router) { }

  api = environment.forgotPasswordUrl
  email: string;
  message: string;
  showSuccess: boolean = false;
  showError: boolean = false;

  ngOnInit(): void {
  }

  onSubmit(){
    const dto: ForgotPasswordDTO = {
      email: this.email,
      clientURI: this.api,
    }
    this.emailService.sendForgotPasswordEmail(dto).subscribe(
      (response: any) =>{
        this.toastr.success(response)
      },
      (error:HttpErrorResponse) => {
       this.toastr.error(error.message)
      })
  }

}
