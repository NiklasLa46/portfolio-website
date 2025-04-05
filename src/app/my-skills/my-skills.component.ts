import { Component, OnInit } from '@angular/core';
import { ArrowSectionComponent } from '../arrow-section/arrow-section.component';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [ArrowSectionComponent, RouterModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss', './../../styles.scss']
})
export class MySkillsComponent implements OnInit, AfterViewInit  {
  learnMoreText: string = '';
  contactMeText: string = '';
  alwaysReadyText: string = '';

  translations = {
    en: {
      learnMore: "Don't see the skill you need?",
      contactMe: "Contact me",
      alwaysReady: "I'm always ready to learn!"
    },
    de: {
      learnMore: "Sehen Sie die Fähigkeit, die Sie brauchen, nicht?",
      contactMe: "Kontaktieren Sie mich",
      alwaysReady: "Ich bin immer bereit zu lernen!"
    }
  };

  @ViewChild('skillsSection', { static: false }) skillsSectionRef!: ElementRef;

  constructor(private languageService: LanguageService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe((lang) => {
      const selectedLang = lang as 'en' | 'de';
      this.learnMoreText = this.translations[selectedLang].learnMore;
      this.contactMeText = this.translations[selectedLang].contactMe;
      this.alwaysReadyText = this.translations[selectedLang].alwaysReady;
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => this.handleIntersect(entries),
      { threshold: 0.4 }
    );
    
    if (this.skillsSectionRef) {
      observer.observe(this.skillsSectionRef.nativeElement);
    }
  }
  
  private handleIntersect(entries: IntersectionObserverEntry[]): void {
    const isMobile = this.isMobileDevice();
    entries.forEach(entry => {
      this.toggleAnimation(entry, isMobile);
    });
  }
  
  private isMobileDevice(): boolean {
    return window.innerWidth <= 768; 
  }
  
  private toggleAnimation(entry: IntersectionObserverEntry, isMobile: boolean): void {
    const skillElements = this.skillsSectionRef.nativeElement.querySelectorAll('.single-skill');
    const learnIcon = this.skillsSectionRef.nativeElement.querySelector('.learn-icon');
    
    if (entry.isIntersecting && isMobile) {
      this.addAnimation(skillElements, learnIcon);
    } else if (!entry.isIntersecting && isMobile) {
      this.removeAnimation(skillElements, learnIcon);
    }
  }
  
  private addAnimation(skillElements: NodeListOf<HTMLElement>, learnIcon: HTMLElement): void {
    skillElements.forEach((el: HTMLElement) => this.renderer.addClass(el, 'animate-once'));
    if (learnIcon) this.renderer.addClass(learnIcon, 'animate-once');
  }
  
  private removeAnimation(skillElements: NodeListOf<HTMLElement>, learnIcon: HTMLElement): void {
    skillElements.forEach((el: HTMLElement) => this.renderer.removeClass(el, 'animate-once'));
    if (learnIcon) this.renderer.removeClass(learnIcon, 'animate-once');
  }
  
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    const headerHeight = document.querySelector('header')?.offsetHeight || 100; 
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - headerHeight,
        behavior: 'smooth',
      });
      }
      setTimeout(() => {
        this.highlightForm();
      }, 600); 
    }

    highlightForm(){
      const contactSection = document.getElementById('input-div');
      for (let i = 0; i < 2; i++) {
        setTimeout(() => {
          contactSection!.classList.add('contact-highlight');
          setTimeout(() => {
            contactSection!.classList.remove('contact-highlight');
          }, 500); 
        }, i * 1000); 
    }
  }
}
