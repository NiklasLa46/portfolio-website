import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from './../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  currentLanguage: 'en' | 'de' = 'en';

  translations: { 
    [key in 'en' | 'de']: { 
      aboutMe: string; 
      mySkills: string; 
      portfolio: string; 
      sayHi: string; 
      email: string; 
    }; 
  } = {
    en: {
      aboutMe: 'About me',
      mySkills: 'My skills',
      portfolio: 'Portfolio',
      sayHi: 'Say Hi!',
      email: 'niklas.lampe00&@gmail.com',
    },
    de: {
      aboutMe: 'Über mich',
      mySkills: 'Meine Skills',
      portfolio: 'Portfolio',
      sayHi: 'Sag Hallo!',
      email: 'niklas.lampe00@gmail.com',
    }
  };

  constructor(private languageService: LanguageService) {
 
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang as 'en' | 'de';  
    });
  }

  toggleLanguage(lang: 'en' | 'de'): void {
    this.languageService.setLanguage(lang);
  }

  public isHeaderExtended: boolean = false;
  public activeLink: string | null = null;
  public currentHeaderImageIndex: number = 0;
  private headerImages: string[] = [
    './../../../assets/header-button/header0.png',
    './../../../assets/header-button/header1.png',
    './../../../assets/header-button/header2.png',
    './../../../assets/header-button/header3.png',
    './../../../assets/header-button/header4.png'
  ];

  private intervalId: any;

  toggleHeader(): void {
    this.isHeaderExtended = !this.isHeaderExtended;

    if (this.isHeaderExtended) {
      this.animateImagesForward();
    } else {
      this.animateImagesBackward();
    }
  }

  animateImagesForward(): void {
    this.currentHeaderImageIndex = 0;
    clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      this.currentHeaderImageIndex++;
      if (this.currentHeaderImageIndex > 3) {
        clearInterval(this.intervalId);
      }
    }, 50);
  }

  animateImagesBackward(): void {
    this.currentHeaderImageIndex = 4;
    clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      this.currentHeaderImageIndex--;
      if (this.currentHeaderImageIndex < 0) {
        clearInterval(this.intervalId);
        this.currentHeaderImageIndex = 0;
      }
    }, 50);
  }

  closeHeader(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    this.activeLink = target.getAttribute('data-link');

    if (this.activeLink) {
      this.scrollToSection(this.activeLink);
    }

    this.isHeaderExtended = false;
    this.animateImagesBackward();
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get currentHeaderImage(): string {
    return this.headerImages[this.currentHeaderImageIndex];
  }

  get translation() {
    return this.translations[this.currentLanguage];  
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
