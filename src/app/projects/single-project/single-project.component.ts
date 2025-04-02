import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, HostListener  } from '@angular/core';


@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
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
}