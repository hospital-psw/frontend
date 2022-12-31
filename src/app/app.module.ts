import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HospitalModule } from './modules/hospital/hospital.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackModule } from './pages/feedback/feedback.module';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { ToastrModule } from 'ngx-toastr';
import { BloodbankPasswordModule } from './pages/bloodbank-password/bloodbank-password.module';
import { LoaderModule } from './shared/modules/loader/loader.module';
import { LoginModule } from './pages/login/login.module';
import { MatInputModule } from '@angular/material/input';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { RegistrationModule } from './pages/registration/registration.module';
import { PatientProfileModule } from './pages/patient-profile/patient-profile.module';
import { TendersModule } from './pages/tenders/tenders.module';
import { AppointmentReservationComponent } from './pages/appointment-reservation-stepper/components/appointment-reservation/appointment-reservation.component';
import { MedicalBranchCardComponent } from './pages/appointment-reservation-stepper/components/medical-branch-card/medical-branch-card.component';
import { DoctorCardComponent } from './pages/appointment-reservation-stepper/components/doctor-card/doctor-card.component';
import { AppointmentCardComponent } from './pages/appointment-reservation-stepper/components/appointment-card/appointment-card.component';
import { SelectionInfoComponent } from './pages/appointment-reservation-stepper/components/selection-info/selection-info.component';
import { JWTService } from './shared/Auth/services/jwt.service';
import { MatMenuModule } from '@angular/material/menu';
import { HomeModule } from './pages/home/home.module';
import { ErrorPagesModule } from './shared/error-pages/error-pages.module';
import { MainAppModule } from './main-app/main-app.module';
import { ModalDialogComponent } from './shared/modal-dialog/modal-dialog/modal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ForgotPasswordPageComponent } from './shared/Auth/components/forgot-password-page/forgot-password-page.component';
import { FormsModule } from '@angular/forms';
import { ResetPasswordPageComponent } from './shared/Auth/components/reset-password-page/reset-password-page.component'; 

@NgModule({
  declarations: [AppComponent, AppointmentReservationComponent, ModalDialogComponent, 
                MedicalBranchCardComponent, DoctorCardComponent, AppointmentCardComponent, SelectionInfoComponent, 
                ForgotPasswordPageComponent, ResetPasswordPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    HospitalModule,
    FeedbackModule,
    WelcomeModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BloodbankPasswordModule,
    LoaderModule,
    LoginModule,
    MatInputModule,
    MatMenuModule,
    PatientProfileModule,
    RegistrationModule,
    HomeModule,
    ErrorPagesModule,
    MainAppModule,
    MatDialogModule,
    FormsModule,
    TendersModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}, JWTService],
  bootstrap: [AppComponent],
})
export class AppModule {}

//{provide: HTTP_INTERCEPTORS, useClass: AuthService, multi:true}
