import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app.component';
import { MainAppRoutingModule } from './main-app-routing.module'
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoaderModule } from '../shared/modules/loader/loader.module';


@NgModule({
  declarations: [MainAppComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainAppRoutingModule,
  ]
})
export class MainAppModule { }
