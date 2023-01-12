import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation} from "swiper";
import { Feedback } from '../../interfaces/feedback';
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-prime-ng-carousel',
  templateUrl: './prime-ng-carousel.component.html',
  styleUrls: ['./prime-ng-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrimeNgCarouselComponent implements OnInit {

  @Input() feedbacks: Feedback[] = [];
  
  constructor() { }
  ngOnInit(): void {
  }

  setImage(creator:string){
    if(creator === "Anonymous")
      return "../../../../../assets/people/anonymous.png";

    return `../../../../../assets/people/profile2.jpg`;
  
  }
}
