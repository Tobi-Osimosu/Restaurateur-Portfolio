import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('text1', { static: false }) text1: ElementRef;
  @ViewChild('text2', { static: false }) text2: ElementRef;
  @ViewChild('btn', { static: false }) btn: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    gsap.from(this.text1.nativeElement, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.6,
    });
    gsap.from(this.text2.nativeElement, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.8,
    });
    gsap.from(this.btn.nativeElement, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }
}
