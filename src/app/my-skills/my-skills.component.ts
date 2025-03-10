import { Component } from '@angular/core';
import { ArrowSectionComponent } from '../arrow-section/arrow-section.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ArrowSectionComponent],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss','./../../styles.scss']
})
export class MySkillsComponent {

}
