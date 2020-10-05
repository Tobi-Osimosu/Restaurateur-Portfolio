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
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('services', { static: false }) services: ElementRef;
  @ViewChild('servicesTitle', { static: false }) servicesTitle: ElementRef;
  @ViewChild('servicesSubTitle', { static: false })
  servicesSubTitle: ElementRef;
  // @ViewChild('box1', { static: false }) box1: ElementRef;
  // @ViewChild('box2', { static: false }) box2: ElementRef;
  // @ViewChild('box3', { static: false }) box3: ElementRef;
  // @ViewChild('box4', { static: false }) box4: ElementRef;
  // @ViewChild('box5', { static: false }) box5: ElementRef;
  // @ViewChild('box6', { static: false }) box6: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: this.services.nativeElement,
        toggleActions: 'restart none none none',
        start: 'top bottom',
      },
    });

    tl.from(this.servicesTitle.nativeElement, { y: -50, opacity: 0 }).from(
      this.servicesSubTitle.nativeElement,
      { y: -50, opacity: 0 },
      '-=0.2'
    );
    // .from(this.box1.nativeElement, { scale: 0, duration: 0.3 })
    // .from(this.box2.nativeElement, { scale: 0, duration: 0.3 })
    // .from(this.box3.nativeElement, { scale: 0, duration: 0.3 })
    // .from(this.box4.nativeElement, { scale: 0, duration: 0.3 })
    // .from(this.box5.nativeElement, { scale: 0, duration: 0.3 })
    // .from(this.box6.nativeElement, { scale: 0, duration: 0.3 });

    // window.addEventListener('mouseover', (p) => {
    //   let rotateX = (window.innerWidth / 2 - p.pageX) / 20;
    //   let rotateY = (window.innerHeight / 2 - p.pageY) / 10;

    //   this.box.nativeElement.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // });

    this.elementRef.nativeElement
      .querySelector('.box1')
      .addEventListener('mouseover', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box1'
        ).style.transform = `rotateX(${
          (window.innerWidth / 2 - event.clientY) / 20
        }deg) rotateY(${(window.innerHeight / 2 - event.clientX) / 20}deg)`;
      });

    this.elementRef.nativeElement
      .querySelector('.box2')
      .addEventListener('mouseover', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box2'
        ).style.transform = `rotateX(${
          (window.innerWidth / 2 - event.clientY) / 20
        }deg) rotateY(${(window.innerHeight / 2 - event.clientX) / 20}deg)`;
      });

    this.elementRef.nativeElement
      .querySelector('.box3')
      .addEventListener('mouseover', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box3'
        ).style.transform = `rotateX(${
          (window.innerWidth / 2 - event.clientY) / 20
        }deg) rotateY(${(window.innerHeight / 2 - event.clientX) / 20}deg)`;
      });

    this.elementRef.nativeElement
      .querySelector('.box4')
      .addEventListener('mouseover', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box4'
        ).style.transform = `rotateX(${
          (window.innerWidth / 2 - event.clientY) / 20
        }deg) rotateY(${(window.innerHeight / 2 - event.clientX) / 20}deg)`;
      });

    this.elementRef.nativeElement
      .querySelector('.box5')
      .addEventListener('mouseover', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box5'
        ).style.transform = `rotateX(${
          (window.innerWidth / 2 - event.clientY) / 20
        }deg) rotateY(${(window.innerHeight / 2 - event.clientX) / 20}deg)`;
      });

    this.elementRef.nativeElement
      .querySelector('.box6')
      .addEventListener('mouseover', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box6'
        ).style.transform = `rotateX(${
          (window.innerWidth / 2 - event.clientY) / 20
        }deg) rotateY(${(window.innerHeight / 2 - event.clientX) / 20}deg)`;
      });

    // UNSET

    this.elementRef.nativeElement
      .querySelector('.box1')
      .addEventListener('mouseout', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box1'
        ).style.transform = `unset`;
      });

    this.elementRef.nativeElement
      .querySelector('.box2')
      .addEventListener('mouseout', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box2'
        ).style.transform = `unset`;
      });

    this.elementRef.nativeElement
      .querySelector('.box3')
      .addEventListener('mouseout', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box3'
        ).style.transform = `unset`;
      });

    this.elementRef.nativeElement
      .querySelector('.box4')
      .addEventListener('mouseout', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box4'
        ).style.transform = `unset`;
      });

    this.elementRef.nativeElement
      .querySelector('.box5')
      .addEventListener('mouseout', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box5'
        ).style.transform = `unset`;
      });

    this.elementRef.nativeElement
      .querySelector('.box6')
      .addEventListener('mouseout', (event) => {
        this.elementRef.nativeElement.querySelector(
          '.box6'
        ).style.transform = `unset`;
      });
  }

  ngOnInit() {}
}
