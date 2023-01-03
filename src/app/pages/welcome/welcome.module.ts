import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { MatIconModule } from '@angular/material/icon';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsCarouselComponent } from './components/news-carousel/news-carousel.component';
import { PrimeNgCarouselComponent } from './components/prime-ng-carousel/prime-ng-carousel.component';

@NgModule({
  declarations: [
    WelcomePageComponent,
    FeedbackCardComponent,
    CarrouselComponent,
    NewsCardComponent,
    NewsCarouselComponent,
    PrimeNgCarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MatIconModule,
  ]
})
export class WelcomeModule { }
