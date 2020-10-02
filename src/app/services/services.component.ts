import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('box', { static: false }) box: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
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
