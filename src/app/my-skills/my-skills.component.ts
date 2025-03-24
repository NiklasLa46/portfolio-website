import { Component, OnInit } from '@angular/core';
import { ArrowSectionComponent } from '../arrow-section/arrow-section.component';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ArrowSectionComponent, RouterModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './../../styles.scss']
})
export class MySkillsComponent implements OnInit {
  learnMoreText: string = '';
  contactMeText: string = '';
  alwaysReadyText: string = '';

  translations = {
    en: {
      learnMore: "Don't see the skill you need?",
      contactMe: "Contact me",
      alwaysReady: "I'm always ready to learn!"
    },
    de: {
      learnMore: "Sehen Sie die Fähigkeit, die Sie brauchen, nicht?",
      contactMe: "Kontaktieren Sie mich",
      alwaysReady: "Ich bin immer bereit zu lernen!"
    }
  };

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      const selectedLang = lang as 'en' | 'de';
      this.learnMoreText = this.translations[selectedLang].learnMore;
      this.contactMeText = this.translations[selectedLang].contactMe;
      this.alwaysReadyText = this.translations[selectedLang].alwaysReady;
    });
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
