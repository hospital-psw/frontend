import { Component, OnInit } from '@angular/core';
import { WelcomePageFeedbackService } from '../../services/welcome-page-feedback.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  feedback:any = []

  constructor(private service:WelcomePageFeedbackService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.feedback = data
    })
  }

}
