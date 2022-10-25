import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Feedback } from './feedback';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  feedback:Feedback[] = [
    {user: 'Nikola', text: 'Ovde ide opis'},
    {user: 'Gravara Grbovic', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sit suscipit ipsam cupiditate, excepturi quisquam in placeat facere earum enim, odio, nulla rem adipisci? Perspiciatis voluptatum in quibusdam quia qui!'},
    {user: 'Andrija', text: 'Ja sam mala sisa'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
