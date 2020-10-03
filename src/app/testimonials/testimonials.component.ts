import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 2,
    spaceBetween: 20,
    keyboard: true,
    navigation: true,
    autoplay: {
      delay: 5000,
    },
    followFinger: true,
    // effect: 'coverflow',
  };

  constructor() {}

  ngOnInit(): void {
    this.manageSlide();
  }

  manageSlide() {
    if (matchMedia('(max-width: 767.98px)').matches) {
      this.config.slidesPerView = 1;
    } else if (matchMedia('(max-width: 991.98px)').matches) {
      this.config.slidesPerView = 1;
    } else if (matchMedia('(min-width: 992px)').matches) {
      this.config.slidesPerView = 2;
    }
  }
}
