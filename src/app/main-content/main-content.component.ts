import { Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { AtfComponent } from '../atf/atf.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ReferencesComponent } from '../references/references.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ AtfComponent, AboutMeComponent, MySkillsComponent, ProjectsComponent, ReferencesComponent, ContactComponent, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements AfterViewInit {
  @ViewChild('aboutMe') aboutMe!: ElementRef;
  @ViewChild('skills') skills!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        console.log('Fragment received:', fragment); // Debug log
        this.scrollToSection(fragment);
      }
    });
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      console.log(`Scrolling to section: ${sectionId}`); // Debug log
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Section not found: ${sectionId}`); // Debug log
    }
  }
}