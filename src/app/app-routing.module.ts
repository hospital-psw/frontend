import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { ChangePasswordComponent } from './pages/bloodbank-password/components/change-password/change-password.component';
import { FeedbackPageComponent } from './pages/feedback/components/feedback-page/feedback-page.component';
import { RegistrationFormComponent } from './pages/registration/components/registration-form/registration-form/registration-form.component';
import { LoginPageComponent } from './pages/login/components/login-page/login-page.component';
import { WelcomePageComponent } from './pages/welcome/components/welcome-page/welcome-page.component';
import { AuthGuard } from './shared/Auth/guard/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackPageComponent, canActivate:[AuthGuard]},
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
