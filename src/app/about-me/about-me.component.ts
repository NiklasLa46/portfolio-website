import { Component } from '@angular/core';
import { ArrowSectionComponent } from '../arrow-section/arrow-section.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ArrowSectionComponent, RouterModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss','../../styles.scss']
})
export class AboutMeComponent {

}
