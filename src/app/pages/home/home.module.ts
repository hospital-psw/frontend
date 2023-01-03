import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppointmentService } from './services/appointment.service';
import { MaterialModule } from 'src/app/material/material.module';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CalendarComponent,
    ViewAppointmentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
     CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [AppointmentService]
})
export class HomeModule { }
