import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      number: '01/04',
      title: 'Join',
      tech: 'JavaScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: './../../../assets/project-pics/join.jpg',
      arrow: './../../../assets/project-pics/project-arrow.png'
    },
    {
      number: '02/04',
      title: 'El Pollo Loco',
      tech: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco bottles to fight against the killer chicken.',
      image: './../../../assets/project-pics/pollo-loco.png',
      arrow: './../../../assets/project-pics/project-arrow.png'
    },
    {
      number: '03/04',
      title: 'DABubble',
      tech: 'Angular | TypeScript | Firebase',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      image: './../../../assets/project-pics/da-bubble.jpg',
      arrow: './../../../assets/project-pics/project-arrow.png'
    },
    {
      number: '04/04',
      title: 'Pokédex',
      tech: 'JavaScript | HTML | CSS | Api',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: './../../../assets/project-pics/pokedex.jpg',
      arrow: './../../../assets/project-pics/project-arrow.png'
    }
  ];
}
