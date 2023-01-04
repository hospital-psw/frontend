import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, Navigation, SwiperOptions} from "swiper";
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
  
  private i: number = 0
  constructor() { }
  ngOnInit(): void {
  }

   config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  handlePicture(){
    this.i += 1
    return `../../../../../assets/people/profile${this.i}.jpg`
  }

}
