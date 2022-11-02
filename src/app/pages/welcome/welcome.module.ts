import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    WelcomePageComponent,
    FeedbackCardComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class WelcomeModule { }
