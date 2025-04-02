import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit, OnDestroy {
  translations = {
    en: {
      title: 'Imprint',
      responsible: 'Responsible',
      name: 'Niklas Lampe',
      postal: 'Postal address',
      address: 'Saarburger Straße 10<br />12247 Berlin',
      contact: 'Contact',
      email: 'E-Mail: niklas.lampe00@gmail.com',
      phone: 'Phone: 015114914843',
      websiteNotes: 'Notes on the Website',
      copyrightNotes: 'Copyright Notice',
      copyrightText: 'The content and works created by the site operators on these pages are subject to German copyright law. The duplication, editing, distribution, and any form of exploitation beyond the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use. As far as the contents on this page are not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such. If you become aware of a copyright infringement, we ask for an appropriate notice. Upon becoming aware of legal violations, we will remove such content immediately.',
      generatorNote: 'This imprint was created with the help of the <a href="https://www.activemind.de/generatoren/impressum/" target="_blank" rel="noopener">Impressum Generator of activeMind AG</a> (Version 2024-07-05).'
    },
    de: {
      title: 'Impressum',
      responsible: 'Verantwortliche(r)',
      name: 'Niklas Lampe',
      postal: 'Postanschrift',
      address: 'Saarburger Straße 10<br />12247 Berlin',
      contact: 'Kontakt',
      email: 'E-Mail: niklas.lampe00@gmail.com',
      phone: 'Telefon: 015114914843',
      websiteNotes: 'Hinweise zur Website',
      copyrightNotes: 'Urheberrechtliche Hinweise',
      copyrightText: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
      generatorNote: 'Dieses Impressum wurde mit Hilfe des <a href="https://www.activemind.de/generatoren/impressum/" target="_blank" rel="noopener">Impressums-Generators der activeMind AG</a> erstellt (Version 2024-07-05).'
    }
  };

  currentLanguage: 'en' | 'de' = 'en';
  imprintContent: any;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang as 'en' | 'de';
      this.updateImprintContent();
    });
    this.updateImprintContent(); // Initialize content
  }

  ngOnDestroy(): void {
    
  }

  updateImprintContent(): void {
    this.imprintContent = this.translations[this.currentLanguage];
  }
}