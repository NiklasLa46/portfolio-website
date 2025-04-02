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
  
  openImprint(event: Event) {
    event.preventDefault();
    const imprintUrl = window.location.origin + '/imprint';
    window.open(imprintUrl, '_blank');
  }
  
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

