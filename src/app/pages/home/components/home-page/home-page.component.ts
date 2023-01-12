import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/pages/welcome/services/news.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  news:any = []
  bloodBank:string = ''
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getData().subscribe((data) => {
      this.news = data
    });
  }

}
