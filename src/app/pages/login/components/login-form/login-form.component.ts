import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Auth/auth.service';
import { LoginDTO } from 'src/app/shared/Auth/interface/LoginDTO';
import { LoginResponseDTO } from 'src/app/shared/Auth/interface/LoginResponseDTO';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent{

  constructor(private authService: AuthService, private router: Router) { }
  
  hide = true;
  defaultRemember = false
  showError = false;

  onSubmit(data: LoginDTO){
    this.authService.login(data).subscribe(
      (response: LoginResponseDTO) =>{
        this.authService.showSuccess();
        this.router.navigate(['/home'])
      },
      (error: HttpErrorResponse) =>{
       this.showError = true
      }
    )
  }

}
