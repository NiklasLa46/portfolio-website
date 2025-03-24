import { Component, OnInit } from '@angular/core';
import { ArrowSectionComponent } from '../arrow-section/arrow-section.component';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ArrowSectionComponent, RouterModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss', '../../styles.scss'],
})
export class AboutMeComponent implements OnInit {
  content: { header: string; paragraph: string; basedIn: string; remote: string; button: string } = {
    header: '',
    paragraph: '',
    basedIn: '',
    remote: '',
    button: '',
  };

  // Explicitly define translations type
  translations: Record<'en' | 'de', { header: string; paragraph: string; basedIn: string; remote: string; button: string }> = {
    en: {
      header: 'About me',
      paragraph: `I’m an aspiring Front-End Developer with a passion for creating
      responsive, user-friendly, and visually appealing websites. I enjoy
      collaborating with teams to turn ideas into interactive, functional
      products using modern tools and technologies. If you think I could be
      of help for your projects, contact me!`,
      basedIn: 'Based in Berlin',
      remote: 'Open to work Remote',
      button: "Let's Talk",
    },
    de: {
      header: 'Über mich',
      paragraph: `Ich bin ein angehender Front-End-Entwickler mit einer Leidenschaft
      für die Erstellung von responsiven, benutzerfreundlichen und optisch
      ansprechenden Websites. Ich arbeite gerne mit Teams zusammen, um Ideen
      in interaktive, funktionale Produkte mit modernen Werkzeugen und
      Technologien umzusetzen. Wenn Sie denken, dass ich Ihnen bei Ihren
      Projekten helfen könnte, kontaktieren Sie mich!`,
      basedIn: 'In Berlin ansässig',
      remote: 'Offen für Remote-Arbeit',
      button: 'Lass uns reden',
    },
  };

  constructor(private languageService: LanguageService) {}
  
  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      if (lang === 'en' || lang === 'de') {
        this.content = this.translations[lang];
      }
    });
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
