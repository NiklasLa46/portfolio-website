import { Component } from '@angular/core';
import { ArrowSectionComponent } from "../arrow-section/arrow-section.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ArrowSectionComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
