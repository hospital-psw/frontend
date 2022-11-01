import { Component, Input, OnInit } from '@angular/core';
import { Feedback } from '../../interfaces/feedback';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
  @Input() feedbacks: Feedback[] = [];
  selectedIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  handleNext(): void {
    if (this.feedbacks.length > this.selectedIndex + 1) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  handleBack(): void {
    if (this.selectedIndex > 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
}
