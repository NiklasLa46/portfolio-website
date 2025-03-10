import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss','../../../styles.scss']
})
export class AtfComponent implements OnInit, OnDestroy {
  currentImage: string = './../../../assets/scroll-arrow/scroll-arrow0.png';
  images: string[] = [
    './../../../assets/scroll-arrow/scroll-arrow0.png',
    './../../../assets/scroll-arrow/scroll-arrow1.png',
    './../../../assets/scroll-arrow/scroll-arrow2.png',
    './../../../assets/scroll-arrow/scroll-arrow3.png',
    './../../../assets/scroll-arrow/scroll-arrow4.png',
    './../../../assets/scroll-arrow/scroll-arrow5.png',
    './../../../assets/scroll-arrow/scroll-arrow6.png',
  ];
  currentIndex: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    // Change the image every 500ms
    this.interval = setInterval(() => {
      this.currentImage = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;  // Loop through the images

      // Pause after completing one full cycle (all images have been shown)
      if (this.currentIndex === 0) {
        setTimeout(() => {
          this.startAnimation(); // Restart animation after a brief pause
        }, 1000); // 1 second pause between cycles
        clearInterval(this.interval); // Stop current interval
      }
    }, 100); // Change the image every 500ms for smooth animation
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}