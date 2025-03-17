import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() projectNumber: string = '';
  @Input() projectTitle: string = '';
  @Input() projectTech: string = '';
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectArrow: string = '';
  @Input() projectIndex!: number; 


}