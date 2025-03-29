import { Component, OnInit } from '@angular/core';
import { SingleReferenceComponent } from './single-reference/single-reference.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../language.service';  
import { ArrowSectionComponent } from '../arrow-section/arrow-section.component';

interface ReferenceTranslation {
  h1: string;
  h2: string;
  reference1: { name: string; title: string; quote: string; };
  reference2: { name: string; title: string; quote: string; };
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [SingleReferenceComponent, CommonModule, ArrowSectionComponent],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss', '../../styles.scss'],
})
export class ReferencesComponent implements OnInit {
  currentLanguage: 'en' | 'de' = 'en'; 

  translations: { [key in 'en' | 'de']: ReferenceTranslation } = {
    en: {
      h1: 'References',
      h2: 'I thrive both independently and as part of a team. Here’s what my colleagues have to say about working with me.',
      reference1: {
        name: 'R. Götze',
        title: 'Team Partner',
        quote: 'I worked with Niklas on the group project Join, and our collaboration was very constructive and professional. He was an extremely reliable team player, and together we solved all the problems ourselves and successfully completed the project.',
      },
      reference2: {
        name: 'A. Bucha',
        title: 'Team Partner',
        quote: 'I worked with Niklas on a project for four weeks. We were always communicative and very dedicated. We always made decisions together and constructively. Working with him was a great pleasure, and I hope we can work together again in the future.',
      }
    },
    de: {
      h1: 'Referenzen',
      h2: 'Ich arbeite gerne sowohl eigenständig als auch im Team. Hier ist, was meine Kollegen über die Zusammenarbeit mit mir sagen.',
      reference1: {
        name: 'R. Götze',
        title: 'Team Partner',
        quote: 'Ich war mit Niklas in dem Gruppenprojekt Join involviert und die Zusammenarbeit mit ihm war sehr konstruktiv und professionell. Er war ein absolut zuverlässiger Teamplayer und dadurch konnten wir gemeinsam alle Probleme selber lösen und das Projekt erfolgreich beenden.',
      },
      reference2: {
        name: 'A. Bucha',
        title: 'Team Partner',
        quote: 'Ich habe vier Wochen lang mit Niklas an einem Projekt zusammengearbeitet. Wir waren stets kommunikativ und beide sehr engagiert. Entscheidungen haben wir immer gemeinsam und konstruktiv getroffen. Die Zusammenarbeit mit ihm hat mir viel Freude bereitet und ich hoffe, dass wir auch in Zukunft wieder zusammenarbeiten können.',
      }
    }
  };

  references = [
    { name: 'reference1' },
    { name: 'reference2' }
  ];

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

  getTranslatedReference(referenceKey: string) {
    return this.translations[this.currentLanguage][referenceKey as keyof ReferenceTranslation];
  }
}

