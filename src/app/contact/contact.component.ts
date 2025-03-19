import { Component } from '@angular/core';
import { ArrowSectionComponent } from "../arrow-section/arrow-section.component";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ArrowSectionComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  onSubmit(form: any): void {
    if (form.valid) {
      console.log("Form Submitted", form.value);
    } else {
      console.log("Form is not valid");
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
}
}