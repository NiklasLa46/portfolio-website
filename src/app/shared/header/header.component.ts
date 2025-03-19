import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  isHeaderExtended: boolean = false;

  onLinkClick(event: MouseEvent): void {
    const link = event.target as HTMLAnchorElement;
    event.preventDefault();
    link.classList.add('clicked');
    setTimeout(() => {
   
      this.router.navigate([link.getAttribute('href')]);
    }, 300); 
  }
  
  toggleHeader(): void {
    this.isHeaderExtended = !this.isHeaderExtended;
  }
}
