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
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('about', { static: false }) about: ElementRef;
  @ViewChild('aboutImg', { static: false }) aboutImg: ElementRef;
  @ViewChild('aboutText', { static: false }) aboutText: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.about.nativeElement,
        toggleActions: 'restart none none none',
        start: 'center bottom',
      },
    });

    tl.from(this.aboutImg.nativeElement, { scale: 0 }).from(
      this.aboutText.nativeElement,
      { y: 50, opacity: 0 },
      '-=0.2'
    );

    let Cont = { val: 0 },
      NewVal = 50;
    tl.to(Cont, {
      val: NewVal,
      roundProps: 'val',
      onUpdate: () => {
        document.getElementById('employee').innerHTML = `${Cont.val}+`;
      },
    });

    let Cont1 = { val: 0 },
      NewVal1 = 3000;
    tl.to(
      Cont1,
      {
        val: NewVal1,
        roundProps: 'val',
        onUpdate: () => {
          document.getElementById('client').innerHTML = `${Cont1.val}+`;
        },
      },
      '-=0.5'
    );

    let Cont2 = { val: 0 },
      NewVal2 = 5;
    tl.to(
      Cont2,
      {
        val: NewVal2,
        roundProps: 'val',
        onUpdate: () => {
          document.getElementById('experience').innerHTML = `${Cont2.val}yrs+`;
        },
      },
      '-=0.7'
    );
  }
}
