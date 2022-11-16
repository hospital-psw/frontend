import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class LoginModule { }
