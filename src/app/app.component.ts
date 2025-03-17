import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { AtfComponent } from './atf/atf/atf.component';
import { AboutMeComponent } from "./about-me/about-me/about-me.component";
import { ArrowSectionComponent } from './arrow-section/arrow-section.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from "./projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, AtfComponent, AboutMeComponent, ArrowSectionComponent, MySkillsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
