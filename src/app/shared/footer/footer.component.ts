import { Component, OnInit } from '@angular/core';
import { LanguageService } from './../../language.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  imprintText: string = '';

  translations = {
    en: 'Imprint',
    de: 'Impressum',
  };

  constructor(private languageService: LanguageService, private router: Router) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      this.imprintText = this.translations[lang as 'en' | 'de'];
    });
  }
  
  getImprintUrl() {
    return this.router.createUrlTree(['/imprint']).toString();
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

