import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './pages/registration/components/registration-form/registration-form/registration-form.component';
import { LoginPageComponent } from './pages/login/components/login-page/login-page.component';
import { WelcomePageComponent } from './pages/welcome/components/welcome-page/welcome-page.component';
import { AuthGuard } from './shared/Auth/guard/auth.guard';
import { ProfilePageComponent } from './pages/patient-profile/components/profile-page/profile-page.component';
import { LoggedAuthGuard } from './shared/Auth/guard/logged.auth.guard';
import { ErrorPageComponent } from './shared/error-pages/error-page.component';
import { MainAppComponent } from './main-app/main-app.component';
import { ForgotPasswordPageComponent } from './shared/Auth/components/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './shared/Auth/components/reset-password-page/reset-password-page.component';
import { ActiveTendersComponent } from './pages/tenders/components/active-tenders/active-tenders.component';
import { TenderDetailsComponent } from './pages/tenders/components/tender-details/tender-details.component';
import { AppointmentReservationComponent } from './pages/appointment-reservation-stepper/components/appointment-reservation/appointment-reservation.component';
import { HomePageComponent } from './pages/home/components/home-page/home-page.component';
import { ViewAppointmentComponent } from './pages/home/components/view-appointment/view-appointment.component';


const routes: Routes = [
  { path: '', component: WelcomePageComponent, canActivate:[LoggedAuthGuard]},
  { path: 'home', component: HomePageComponent, canActivate:[AuthGuard]},
  { path: 'feedback', component: FeedbackPageComponent, canActivate:[AuthGuard]},
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'registration', component: RegistrationFormComponent},
  { path: 'login', component: LoginPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'tenders', component: ActiveTendersComponent},
  { path: 'tender/:id', component: TenderDetailsComponent},
  { path: 'reservation', component: AppointmentReservationComponent },
  { path: 'appointmentView', component: ViewAppointmentComponent },


const routes: Routes = [
  { path: '', component: WelcomePageComponent, canActivate:[LoggedAuthGuard]},
  { path: 'login', component: LoginPageComponent, canActivate:[LoggedAuthGuard]},
  { path: 'register', component: RegistrationFormComponent, canActivate:[LoggedAuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordPageComponent, canActivate:[LoggedAuthGuard]},
  { path: 'reset-password', component: ResetPasswordPageComponent, canActivate:[LoggedAuthGuard]},
  { path: 'tenders', component: ActiveTendersComponent, canActivate:[AuthGuard]},
  { path: 'tender/:id', component: TenderDetailsComponent, canActivate:[AuthGuard]},
  { path: 'reservation', component: AppointmentReservationComponent, canActivate:[AuthGuard]},
  {
    path: 'app',
    component: MainAppComponent,
    loadChildren:() =>import('./main-app/main-app.module').then(x=>x.MainAppModule)
  },
  {
    path:'error',
    component: ErrorPageComponent,
    loadChildren:() =>import('./shared/error-pages/error-pages.module').then(x=>x.ErrorPagesModule)
  },
  {path: '**', redirectTo: '/error/notfound'},
  

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
