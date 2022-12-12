import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatListModule
  ]
})
export class PatientProfileModule { }
