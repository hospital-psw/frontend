import { Component, ViewEncapsulation, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { News } from 'src/app/pages/welcome/interfaces/news';
import { DatePipe } from '@angular/common';
import SwiperCore, { EffectFlip, Pagination, Navigation, Autoplay } from "swiper";
SwiperCore.use([EffectFlip, Pagination, Navigation, Autoplay]);

@Component({
  selector: 'app-news-swiper',
  templateUrl: './news-swiper.component.html',
  styleUrls: ['./news-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsSwiperComponent implements OnInit {

  @Input() news: News[] = [];
  constructor(public datepipe: DatePipe, private cdr: ChangeDetectorRef){ }

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    setTimeout(() => {
      this.cdr.detectChanges();
    },1000);
  }
  
  getDate(date: any){
    return this.datepipe.transform(date, 'dd.MM.yyyy.') 
  }




}
