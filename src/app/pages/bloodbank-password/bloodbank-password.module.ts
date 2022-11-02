import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class BloodbankPasswordModule {}
