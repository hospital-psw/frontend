import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback';
import { WelcomePageServiceService } from './welcome-page-service.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  feedback:any = {}

  constructor(private service:WelcomePageServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data) => {
      this.feedback = data
    })
  }

}
