import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HospitalModule } from './modules/hospital/hospital.module';
import { PagesModule } from './modules/pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackModule } from './pages/feedback/feedback.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { ToastrModule } from 'ngx-toastr';
import { BloodbankPasswordModule } from './pages/bloodbank-password/bloodbank-password.module';
import { LoaderModule } from './shared/modules/loader/loader.module';
import { LoginModule } from './pages/login/login.module';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from './shared/Auth/services/auth.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { RegistrationModule } from './pages/registration/registration.module';
import { PatientProfileModule } from './pages/patient-profile/patient-profile.module';
import { AppointmentReservationComponent } from './pages/appointment-reservation-stepper/components/appointment-reservation/appointment-reservation.component';
import { MedicalBranchCardComponent } from './pages/appointment-reservation-stepper/components/medical-branch-card/medical-branch-card.component';
import { DoctorCardComponent } from './pages/appointment-reservation-stepper/components/doctor-card/doctor-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AppointmentReservationComponent, MedicalBranchCardComponent, DoctorCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PagesModule,
    HospitalModule,
    FeedbackModule,
    WelcomeModule,
    ToastrModule.forRoot(),
    BloodbankPasswordModule,
    LoaderModule,
    LoginModule,
    MatInputModule,
    PatientProfileModule,
    RegistrationModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}

//{provide: HTTP_INTERCEPTORS, useClass: AuthService, multi:true}