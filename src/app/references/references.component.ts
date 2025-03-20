import { Component, Input } from '@angular/core';
import { SingleReferenceComponent } from './single-reference/single-reference.component';
import { CommonModule } from '@angular/common';
import { ArrowSectionComponent } from "../arrow-section/arrow-section.component";

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [SingleReferenceComponent, CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss', '../../styles.scss'],
})
export class ReferencesComponent {
  references = [
    {
      name: 'R. Götze',
      title: 'Team Partner',
      quote: 'Ich war mit Niklas in dem Gruppenprojekt Join involviert und die Zusammenarbeit mit ihm war sehr konstruktiv und professionell. Er war ein absolut zuverlässiger Teamplayer und dadurch konnten wir gemeinsam alle Probleme selber lösen und das Projekt erfolgreich beenden.',
      image: './../../../assets/format_quote.png'
    },
    {
      name: 'A. Bucha',
      title: 'Team Partner',
      quote: 'Ich habe vier Wochen lang mit Niklas Lampe an einem Projekt zusammengearbeitet. Wir waren stets kommunikativ und beide sehr engagiert. Entscheidungen haben wir immer gemeinsam und konstruktiv getroffen. Die Zusammenarbeit mit ihm hat mir viel Freude bereitet und ich hoffe, dass wir auch in Zukunft wieder zusammenarbeiten können.',
      image: './../../../assets/format_quote.png'
    }
  ];
}
