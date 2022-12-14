import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './pages/registration/components/registration-form/registration-form/registration-form.component';
import { LoginPageComponent } from './pages/login/components/login-page/login-page.component';
import { WelcomePageComponent } from './pages/welcome/components/welcome-page/welcome-page.component';
import { AuthGuard } from './shared/Auth/guard/auth.guard';
import { LoggedAuthGuard } from './shared/Auth/guard/logged.auth.guard';
import { ErrorPageComponent } from './shared/error-pages/error-page.component';
import { MainAppComponent } from './main-app/main-app.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent, canActivate:[LoggedAuthGuard]},
  { path: 'login', component: LoginPageComponent, canActivate:[LoggedAuthGuard]},
  { path: 'register', component: RegistrationFormComponent, canActivate:[LoggedAuthGuard]},
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
   {path: '**', redirectTo: '/error/notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
