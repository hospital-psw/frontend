import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponseDTO } from 'src/app/shared/Auth/interface/LoginResponseDTO';
import { AuthService } from 'src/app/shared/Auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent{

  constructor(private authService: AuthService, private router: Router) { }
  
  hide = true;
  defaultRemember = true
  showError = false;
  errorMessage = ''
  isLogging = false;

  onSubmit(form: NgForm){
    this.showError = false
    if(form.value.rememberMe == null){
      form.value.rememberMe = false
    }
    this.authService.login(form.value).subscribe(
      (response: LoginResponseDTO) =>{
        this.authService.showSuccess();
        this.router.navigate(['/home'])
      },
      (error: HttpErrorResponse) =>{
        this.showError = true
        this.errorMessage = error.error
        form.resetForm();
      }
    )
  }

}
