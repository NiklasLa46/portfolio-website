import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrls: ['./atf.component.scss', '../../styles.scss']
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
      scrollText: 'Scroll Down'
    },
    de: {
      role: 'Entwickler',
      scrollText: 'Scroll nach unten'
    }
  };

  role: string = '';  
  scrollText: string = '';  

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.startAnimation();
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.updateTranslations(lang as 'en' | 'de');
    });
  }

  startAnimation(): void {
    this.interval = setInterval(() => {
      this.currentImage = this.images[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      if (this.currentIndex === 0) {
        setTimeout(() => {
          this.startAnimation();
        }, 1000);
        clearInterval(this.interval);
      }
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateTranslations(lang: 'en' | 'de'): void {
    this.role = this.translations[lang].role;
    this.scrollText = this.translations[lang].scrollText;
  }
}
