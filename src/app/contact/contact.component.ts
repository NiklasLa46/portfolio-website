import { Component } from '@angular/core';
import { ArrowSectionComponent } from "../arrow-section/arrow-section.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';  

interface ContactTranslations {
  h1: string;
  h2: string;
  h3: string;
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  privacyText: string;
  button: string;
  errors: {
    required: string;
    email: string;
  };
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ArrowSectionComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  currentLanguage: 'en' | 'de' = 'en'; 


  translations: { [key in 'en' | 'de']: ContactTranslations } = {
    en: {
      h1: 'Say Hi!',
      h2: 'Want to discuss a new project?',
      h3: "Say hello! Let's discuss your ideas and make it happen",
      placeholders: {
        name: 'Your name',
        email: 'Your email',
        message: 'Your message'
      },
      privacyText: "I've read the <a href=''>privacy policy</a> and agree to the processing of my data outlined.",
      button: 'Send message',
      errors: {
        required: 'This field is required.',
        email: 'Please enter a valid email address.'
      }
    },
    de: {
      h1: 'Sag Hallo!',
      h2: 'Möchten Sie ein neues Projekt besprechen?',
      h3: 'Sagen Sie Hallo! Lassen Sie uns Ihre Ideen besprechen und umsetzen',
      placeholders: {
        name: 'Ihr Name',
        email: 'Ihre E-Mail',
        message: 'Ihre Nachricht'
      },
      privacyText: "Ich habe die <a href=''>Datenschutzrichtlinie</a> gelesen und stimme der Verarbeitung meiner Daten gemäß den dargelegten Bestimmungen zu.",
      button: 'Nachricht senden',
      errors: {
        required: 'Dieses Feld ist erforderlich.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
      }
    }
  };

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang as 'en' | 'de';  
    });
  }

  get h1Text(): string {
    return this.translations[this.currentLanguage].h1;
  }

  get h2Text(): string {
    return this.translations[this.currentLanguage].h2;
  }

  get h3Text(): string {
    return this.translations[this.currentLanguage].h3;
  }

  get placeholders() {
    return this.translations[this.currentLanguage].placeholders;
  }

  get privacyText(): string {
    return this.translations[this.currentLanguage].privacyText;
  }

  get buttonText(): string {
    return this.translations[this.currentLanguage].button;
  }

  get errorMessages() {
    return this.translations[this.currentLanguage].errors;
  }


  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted', form.value);
    } else {
      console.log('Form is not valid');
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
