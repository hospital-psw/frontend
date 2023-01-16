import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/pages/welcome/services/news.service';
import { SymptomStatistics } from '../../interface/SymptomStatistics';
import { StatisticService } from '../../services/statistic.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  news:any = []
  symptoms: any = []
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsService.getData().subscribe((data) => {
      this.news = data
    });
  }

  handleGuard(){
    this.router.navigate(["/covid-guard"])
  }

}
