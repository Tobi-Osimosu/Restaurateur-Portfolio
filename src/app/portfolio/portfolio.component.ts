import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('portfolio', { static: false }) portfolio: ElementRef;
  @ViewChild('portfolioTitle', { static: false }) portfolioTitle: ElementRef;
  @ViewChild('portfolioSubTitle', { static: false })
  portfolioSubTitle: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.portfolio.nativeElement,
        toggleActions: 'restart none none reset',
        start: 'top bottom',
      },
    });

    tl.from(this.portfolioTitle.nativeElement, { y: -50, opacity: 0 }).from(
      this.portfolioSubTitle.nativeElement,
      { y: -50, opacity: 0 },
      '-=0.2'
    );
  }
}
