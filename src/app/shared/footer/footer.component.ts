import { Component, OnInit } from '@angular/core';
import { LanguageService } from './../../language.service'; 
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
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
    const headerHeight = document.querySelector('header')?.offsetHeight || 100; 
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - headerHeight,
        behavior: 'smooth',
      });
      this.highlightForm();

      }
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

