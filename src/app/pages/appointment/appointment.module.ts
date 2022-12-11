import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RecommendAppointmentComponent } from './components/recommend-appointment/recommend-appointment.component';


@NgModule({
  declarations: [
    RecommendAppointmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule
  ]
})
export class AppointmentModule { }
