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
import { PatientProfileModule } from './pages/patient-profile/patient-profile.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//{provide: HTTP_INTERCEPTORS, useClass: AuthService, multi:true}