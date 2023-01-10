import { Component, ViewEncapsulation, Input } from '@angular/core';
import { News } from 'src/app/pages/welcome/interfaces/news';
import SwiperCore, { EffectFlip, Pagination, Navigation } from "swiper";
SwiperCore.use([EffectFlip, Pagination, Navigation]);

@Component({
  selector: 'app-news-swiper',
  templateUrl: './news-swiper.component.html',
  styleUrls: ['./news-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsSwiperComponent {

  @Input() news: News[] = [];
  constructor(){ }
}
