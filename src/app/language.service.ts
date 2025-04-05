import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly STORAGE_KEY = 'app_language';

  private languageSubject: BehaviorSubject<'en' | 'de'>;
  public currentLanguage$: Observable<'en' | 'de'>;

  constructor() {
    let savedLang: 'en' | 'de' = 'en';

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored === 'en' || stored === 'de') {
        savedLang = stored;
      }
    }

    this.languageSubject = new BehaviorSubject<'en' | 'de'>(savedLang);
    this.currentLanguage$ = this.languageSubject.asObservable();
  }

  setLanguage(lang: 'en' | 'de'): void {
    localStorage.setItem(this.STORAGE_KEY, lang);
    this.languageSubject.next(lang);
  }

  getLanguage(): 'en' | 'de' {
    return this.languageSubject.value;
  }
}
