import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-section.component.html',
  styleUrl: './arrow-section.component.scss'
})
export class ArrowSectionComponent {
  images: string[] = [
    './../../assets/diagonal-arrow/dia-arrow-left1.png',
    './../../assets/diagonal-arrow/dia-arrow-left2.png',
    './../../assets/diagonal-arrow/dia-arrow-left3.png'
  ];
  currentImage: string = this.images[0];
  isLastImage: boolean = false; 
  private intervalId: any;
  private animationStarted: boolean = false;  

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
