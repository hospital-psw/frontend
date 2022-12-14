import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppointmentService } from './services/appointment.service';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';

@NgModule({
  declarations: [
    HomePageComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
     CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    LoaderModule
  ],
  providers: [AppointmentService]
})
export class HomeModule { }
