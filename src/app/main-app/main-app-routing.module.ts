import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { AppointmentReservationComponent } from '../pages/appointment-reservation-stepper/components/appointment-reservation/appointment-reservation.component';
import { ChangePasswordComponent } from '../pages/bloodbank-password/components/change-password/change-password.component';
import { FeedbackPageComponent } from '../pages/feedback/components/feedback-page/feedback-page.component';
import { HomePageComponent } from '../pages/home/components/home-page/home-page.component';
import { LoginPageComponent } from '../pages/login/components/login-page/login-page.component';
import { ProfilePageComponent } from '../pages/patient-profile/components/profile-page/profile-page.component';
import { RegistrationFormComponent } from '../pages/registration/components/registration-form/registration-form/registration-form.component';
import { AuthGuard } from '../shared/Auth/guard/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate:[AuthGuard]},
  { path: 'feedback', component: FeedbackPageComponent, canActivate:[AuthGuard]},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'profile', component: ProfilePageComponent, canActivate:[AuthGuard]},
  { path: 'reservation', component: AppointmentReservationComponent, canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }