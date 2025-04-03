import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss', './single-project-respo.component.scss']
})
export class SingleProjectComponent implements OnInit {
  @Input() projectNumber: string = '';
  @Input() projectTitle: string = '';
  @Input() projectTech: string = '';
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectArrow: string = '';
  @Input() projectIndex!: number; 
  @Input() githubLink: string = '';
  @Input() liveTestLink: string = '';

  isAbove1050: boolean = true; 
  isScrolledIntoView: boolean = false;  

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isAbove1050 = window.innerWidth > 1050;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkIfInView();
  }

  checkIfInView() {
    const element = document.getElementById(`project-${this.projectNumber}`);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    this.isScrolledIntoView = isInView;
  }
}
