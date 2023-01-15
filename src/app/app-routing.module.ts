import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './pages/registration/components/registration-form/registration-form/registration-form.component';
import { LoginPageComponent } from './pages/login/components/login-page/login-page.component';
import { WelcomePageComponent } from './pages/welcome/components/welcome-page/welcome-page.component';
import { AuthGuard } from './shared/Auth/guard/auth.guard';
import { LoggedAuthGuard } from './shared/Auth/guard/logged.auth.guard';
import { ErrorPageComponent } from './shared/error-pages/error-page.component';
import { MainAppComponent } from './main-app/main-app.component';
import { ForgotPasswordPageComponent } from './shared/Auth/components/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './shared/Auth/components/reset-password-page/reset-password-page.component';
import { ActiveTendersComponent } from './pages/tenders/components/active-tenders/active-tenders.component';
import { TenderDetailsComponent } from './pages/tenders/components/tender-details/tender-details.component';
import { ConfirmMailPageComponent } from './shared/Auth/components/confirm-mail-page/confirm-mail-page.component';
import { CovidGuardComponent } from './pages/covid-guard/covid-guard.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    canActivate: [LoggedAuthGuard],
    title: 'Care Connect',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoggedAuthGuard],
    title: 'Welcome | Care Connect',
  },
  {
    path: 'register',
    component: RegistrationFormComponent,
    canActivate: [LoggedAuthGuard],
    title: 'Join us | Care Connect',
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent,
    canActivate: [LoggedAuthGuard],
    title: 'Forgot password | Care Connect',
  },
  {
    path: 'reset-password',
    component: ResetPasswordPageComponent,
    canActivate: [LoggedAuthGuard],
    title: 'Reset password | Care Connect',
  },
  {
    path: 'confirm-email',
    component: ConfirmMailPageComponent,
    canActivate: [LoggedAuthGuard],
    title: 'Confirm email | Care Connect',
  },
  {
    path: 'tenders',
    component: ActiveTendersComponent,
    canActivate: [AuthGuard],
    title: 'Tenders | Care Connect',
  },
  {
    path: 'tender/:id',
    component: TenderDetailsComponent,
    canActivate: [AuthGuard],
    title: 'Tender Details | CareConnect',
  },
  {
    path: 'app',
    component: MainAppComponent,
    loadChildren: () =>
      import('./main-app/main-app.module').then((x) => x.MainAppModule),
    title: 'Care Connect',
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    loadChildren: () =>
      import('./shared/error-pages/error-pages.module').then(
        (x) => x.ErrorPagesModule
      ),
    title: 'Error | Care Connect',
  },
  {
    path: 'covid-guard',
    component: CovidGuardComponent,
    title: 'Covid Guard | Care Connect',
  },
  {
    path: '**',
    redirectTo: '/error/notfound',
    title: 'Not Found | Care Connect',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
