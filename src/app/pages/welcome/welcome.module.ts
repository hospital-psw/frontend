import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { MatIconModule } from '@angular/material/icon';
import { PrimeNgCarouselComponent } from './components/prime-ng-carousel/prime-ng-carousel.component';
import { SwiperModule } from 'swiper/angular';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    WelcomePageComponent,
    FeedbackCardComponent,
    CarrouselComponent,
    PrimeNgCarouselComponent,
    OurServicesComponent,
    OurTeamComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    MatIconModule,
    SwiperModule
  ]
})
export class WelcomeModule { }
