import { Component, OnInit } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service'; 


interface Project {
  number: string;
  title: { [key in 'en' | 'de']: string };  
  tech: string;
  description: { [key in 'en' | 'de']: string }; 
  image: string;
  arrow: string;
  githubLink: string;
  liveTestLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  currentLanguage: 'en' | 'de' = 'en';  

  translations = {
    en: {
      h2: 'Explore a selection of my work here - Interact with <br> projects to see my skills in action',
    },
    de: {
      h2: 'Entdecken Sie hier eine Auswahl meiner Projekte - Interagieren Sie mit <br> Projekten, um meine Fähigkeiten in Aktion zu sehen',
    },
  };

  get h2Text(): string {
    return this.translations[this.currentLanguage].h2;  
  }

  projects: Project[] = [
    {
      number: '01/04',
      title: { en: 'Join', de: 'Join' },
      tech: 'JavaScript | HTML | CSS | Firebase',
      description: { 
        en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        de: 'Task-Manager, inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.' 
      },
      image: './../../../assets/project-pics/join.jpg',
      arrow: './../../../assets/project-pics/project-arrow.png',
         githubLink: 'https://github.com/Andrei-Octavian-Buha/join',
    liveTestLink: 'https://your-live-test-link.com/join'
    },
    {
      number: '02/04',
      title: { en: 'El Pollo Loco', de: 'El Pollo Loco' },
      tech: 'JavaScript | HTML | CSS',
      description: {
        en: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco bottles to fight against the killer chicken.',
        de: 'Ein einfaches Jump-and-Run-Spiel auf objektorientierter Basis. Helfen Sie Pepe, Münzen und Tabasco-Flaschen zu finden, um gegen das Killer-Huhn zu kämpfen.'
      },
      image: './../../../assets/project-pics/pollo-loco.png',
      arrow: './../../../assets/project-pics/project-arrow.png',
         githubLink: 'https://github.com/NiklasLa46/PolloLoco',
    liveTestLink: 'https://your-live-test-link.com/join'
    },
    {
      number: '03/04',
      title: { en: 'DABubble', de: 'DABubble' },
      tech: 'Angular | TypeScript | Firebase',
      description: {
        en: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
        de: 'Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und Zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Nachrichten und robuster Kanalorganisation.'
      },
      image: './../../../assets/project-pics/da-bubble.jpg',
      arrow: './../../../assets/project-pics/project-arrow.png',
         githubLink: 'https://github.com/your-repo/join',
    liveTestLink: 'https://your-live-test-link.com/join'
    },
    {
      number: '04/04',
      title: { en: 'Pokédex', de: 'Pokédex' },
      tech: 'JavaScript | HTML | CSS | Api',
      description: {
        en: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
        de: 'Basierend auf der PokéAPI eine einfache Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.'
      },
      image: './../../../assets/project-pics/pokedex.jpg',
      arrow: './../../../assets/project-pics/project-arrow.png',
         githubLink: 'https://github.com/NiklasLa46/Pokedex',
    liveTestLink: 'https://your-live-test-link.com/join'
    }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe((lang: string) => {
      this.currentLanguage = lang as 'en' | 'de';  
    });
  }

  getTranslatedTitle(project: Project): string {  
    return project.title[this.currentLanguage] || project.title['en'];  
  }

  getTranslatedDescription(project: Project): string {  
    return project.description[this.currentLanguage] || project.description['en'];  
  }
}
