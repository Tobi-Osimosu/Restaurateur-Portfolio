import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
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

  @ViewChild('testimonials', { static: false }) testimonials: ElementRef;
  @ViewChild('testimonialsTitle', { static: false })
  testimonialsTitle: ElementRef;
  @ViewChild('testimonialsSubTitle', { static: false })
  testimonialsSubTitle: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.manageSlide();
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.testimonials.nativeElement,
        toggleActions: 'restart none none none',
        start: 'top bottom',
      },
    });

    tl.from(this.testimonialsTitle.nativeElement, { y: -50, opacity: 0 }).from(
      this.testimonialsSubTitle.nativeElement,
      { y: -50, opacity: 0 },
      '-=0.2'
    );
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
