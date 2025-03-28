import { Component, inject } from '@angular/core';
import { ArrowSectionComponent } from "../arrow-section/arrow-section.component";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';  
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface ContactTranslations {
  h1: string;
  h2: string;
  h3: string;
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  privacyTextParts: {
    one: string;     
    policy: string;  
    two: string;     
  };
  button: string;
  errors: {
    required: string;
    email: string;
    minLength: string;
    invalidCharacters: string;
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
      privacyTextParts: {
        one: "I've read the ",
        policy: 'privacy policy',
        two: ' and agree to the processing of my data outlined.'
      },
      button: 'Send message',
      errors: {
        required: 'This field is required.',
        email: 'Please enter a valid email address.',
        minLength: 'Must be at least 3 characters long.' ,
        invalidCharacters: 'Only alphabetic characters are allowed.'
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
      privacyTextParts: {
        one: 'Ich habe die ',
        policy: 'Datenschutzrichtlinie',
        two: ' gelesen und stimme der Verarbeitung meiner Daten gemäß den dargelegten Bestimmungen zu.'
      },
      button: 'Nachricht senden',
      errors: {
        required: 'Dieses Feld ist erforderlich.',
        email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        minLength: 'Muss mindestens 3 Zeichen lang sein.' ,
          invalidCharacters: 'Es sind nur Buchstaben erlaubt.'
      }
    }
  };

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  constructor(private languageService: LanguageService, private router: Router) {}

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

  get privacyTextParts() {
    return this.translations[this.currentLanguage].privacyTextParts;
  }

  get buttonText(): string {
    return this.translations[this.currentLanguage].button;
  }

  get errorMessages() {
    return this.translations[this.currentLanguage].errors;
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  getImprintUrl() {
    return this.router.createUrlTree(['/privacy']).toString();
  }
}
