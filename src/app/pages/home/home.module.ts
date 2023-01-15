import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppointmentService } from './services/appointment.service';
import { MaterialModule } from 'src/app/material/material.module';
import { LoaderModule } from 'src/app/shared/modules/loader/loader.module';
import { NewsSwiperComponent } from './components/news-swiper/news-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { SymptomsChartComponent } from './components/symptoms-chart/symptoms-chart.component';

@NgModule({
  declarations: [
    HomePageComponent,
    CalendarComponent,
    NewsSwiperComponent,
    SymptomsChartComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
     CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    LoaderModule,
    SwiperModule,
  ],
  providers: [AppointmentService]
})
export class HomeModule { }
