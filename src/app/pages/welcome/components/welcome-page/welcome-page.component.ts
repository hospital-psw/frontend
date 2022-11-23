import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomePageFeedbackService } from '../../services/welcome-page-feedback.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  feedback:any = []

  constructor(private service:WelcomePageFeedbackService, private router: Router) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.feedback = data
    })
  }

  onClick(path: string){
    console.log(path)
    this.router.navigate([`/${path}`])
  }

}
