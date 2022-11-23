import { Component, Input, OnInit } from '@angular/core';
import { News } from '../../interfaces/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() news!:News;

  constructor() { }

  ngOnInit(): void {
  }
}
