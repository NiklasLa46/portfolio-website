import { Component } from '@angular/core';
import { ArrowSectionComponent } from '../../arrow-section/arrow-section.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ArrowSectionComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss','../../../styles.scss']
})
export class AboutMeComponent {

}
