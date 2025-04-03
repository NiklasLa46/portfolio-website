import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrow-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-section.component.html',
  styleUrls: ['./arrow-section.component.scss']
})
export class ArrowSectionComponent implements AfterViewInit {
  @ViewChild('arrowSection') arrowSection!: ElementRef;

  images: string[] = [
    './../../assets/diagonal-arrow/dia-arrow-left1.png',
    './../../assets/diagonal-arrow/dia-arrow-left2.png',
    './../../assets/diagonal-arrow/dia-arrow-left3.png'
  ];
  currentImage: string = this.images[0];
  isLastImage: boolean = false; 
  private intervalId: any;
  private animationStarted: boolean = false;  

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const options = {
      root: null,
      threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
    
          this.startAnimation();
        }
      });
    }, options);

    observer.observe(this.arrowSection.nativeElement);
  }

  startAnimation(): void {
    if (this.animationStarted) return;

    this.animationStarted = true;

    let index = 0;
    this.isLastImage = false; 
    this.intervalId = setInterval(() => {
      index++;
      if (index < this.images.length) {
        this.currentImage = this.images[index];
        this.isLastImage = index === this.images.length - 1; 
      } else {
        clearInterval(this.intervalId); 
        this.intervalId = null;
      }
    }, 100);
  }
}
