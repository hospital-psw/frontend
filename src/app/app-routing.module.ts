import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { ChangePasswordComponent } from './pages/bloodbank-password/components/change-password/change-password.component';
import { FeedbackPageComponent } from './pages/feedback/components/feedback-page/feedback-page.component';
import { RegistrationFormComponent } from './pages/registration/components/registration-form/registration-form/registration-form.component';
import { WelcomePageComponent } from './pages/welcome/components/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'feedback', component: FeedbackPageComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'registration', component: RegistrationFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
