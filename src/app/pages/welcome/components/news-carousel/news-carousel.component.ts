import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../interfaces/news';

@Component({
  selector: 'app-news-carousel',
  templateUrl: './news-carousel.component.html',
  styleUrls: ['./news-carousel.component.scss']
})
export class NewsCarouselComponent implements OnInit {
  @Input() allNews: News[] = [];
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {}

  handleNext(): void {
    if (this.allNews.length > this.selectedIndex + 1) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  handleBack(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }

}
