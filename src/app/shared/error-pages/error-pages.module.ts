import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForbiddenPageComponent } from './components/forbidden-page/forbidden-page.component';
import { ErrorPageComponent } from './error-page.component';
import { RouterModule } from '@angular/router';
import { ErorrRoutingModule } from './error-routing.module';



@NgModule({
  declarations: [
    ForbiddenPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErorrRoutingModule,
  ]
})
export class ErrorPagesModule { }
