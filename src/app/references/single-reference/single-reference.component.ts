import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-reference',
  standalone: true,
  imports: [],
  templateUrl: './single-reference.component.html',
  styleUrl: './single-reference.component.scss'
})
export class SingleReferenceComponent {
  @Input() reference: any;
}
