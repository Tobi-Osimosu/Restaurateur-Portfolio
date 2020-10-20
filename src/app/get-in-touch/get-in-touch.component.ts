import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit, AfterViewInit {
  @ViewChild('getInTouch', { static: false }) getInTouch: ElementRef;
  @ViewChild('getInTouchTitle', { static: false })
  getInTouchTitle: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.getInTouch.nativeElement,
        toggleActions: 'restart none none reset',
        start: 'top bottom',
      },
    });

    tl.from(this.getInTouchTitle.nativeElement, { y: -50, opacity: 0 });
  }

}
