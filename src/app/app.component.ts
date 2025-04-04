import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { AtfComponent } from './atf/atf.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { ArrowSectionComponent } from './arrow-section/arrow-section.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from "./projects/projects.component";
import { ReferencesComponent } from "./references/references.component";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { PrivacyComponent } from './privacy/privacy.component';
import { ImprintComponent } from './imprint/imprint.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
