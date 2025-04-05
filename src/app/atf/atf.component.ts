import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss', '../../styles.scss'],
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

  translations = {
    en: {
      role: 'Developer',
      scrollText: 'Scroll Down',
    },
    de: {
      role: 'Entwickler',
      scrollText: 'Scroll nach unten',
    },
  };

  role: string = '';
  scrollText: string = '';
  animationFrameId: number | null = null;
  private lastFrameTime = 0;
  private frameDuration = 100;
  private delayAfterLoop = 1000;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.startAnimation();
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.updateTranslations(lang as 'en' | 'de');
    });
  }

  startAnimation(): void {
    this.lastFrameTime = 0;
    this.animationFrameId = requestAnimationFrame(this.animateFrame.bind(this));
  }
  
  private animateFrame(timestamp: number): void {
    if (!this.lastFrameTime) {
      this.lastFrameTime = timestamp;
    }
  
    const delta = timestamp - this.lastFrameTime;
  
    if (delta >= this.frameDuration) {
      this.updateArrowFrame(timestamp);
    }
  
    this.animationFrameId = requestAnimationFrame(this.animateFrame.bind(this));
  }
  
  private updateArrowFrame(currentTimestamp: number): void {
    this.currentImage = this.images[this.currentIndex];
    this.currentIndex++;
  
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
      this.lastFrameTime = currentTimestamp + this.delayAfterLoop;
    } else {
      this.lastFrameTime = currentTimestamp;
    }
  }
  
  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  updateTranslations(lang: 'en' | 'de'): void {
    this.role = this.translations[lang].role;
    this.scrollText = this.translations[lang].scrollText;
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    const headerHeight = document.querySelector('header')?.offsetHeight || 100; 
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - headerHeight,
        behavior: 'smooth',
      });
      }
      setTimeout(() => {
        this.highlightForm();
      }, 600); 
    }

    highlightForm(){
      const contactSection = document.getElementById('input-div');
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          contactSection!.classList.add('contact-highlight');
          setTimeout(() => {
            contactSection!.classList.remove('contact-highlight');
          }, 500); 
        }, i * 1000); 
    }
  }
}
