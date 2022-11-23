import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { WelcomePageFeedbackService } from '../../services/welcome-page-feedback.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  feedback:any = []
  allNews:any = []

  constructor(private feedbackService:WelcomePageFeedbackService, private newsService: NewsService) { }

  ngOnInit(): void {
    this.feedbackService.getData().subscribe((data) => {
      this.feedback = data
    });
    this.newsService.getData().subscribe((data) => {
      this.allNews = data
    });
  }

}
