import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent{

  constructor() { }
  
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFromControl = new FormControl('', [Validators.required]);

}
