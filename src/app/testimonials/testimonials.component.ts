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
    // slidesPerView: 1,
    // spaceBetween: 19,
    keyboard: true,
    navigation: true,
    autoplay: {
      delay: 5000,
    },
    followFinger: true,
    // effect: 'coverflow',
  };

  constructor() {}

  ngOnInit(): void {}
}
