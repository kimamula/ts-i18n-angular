import { Component, Input } from '@angular/core';
import { TranslateService } from './translate/translate.service';
import { Dictionary, Lang } from './translate/dictionary';

@Component({
  selector: 'app-hello',
  template: `
  <h1>{{ dictionary.title }}</h1>
  <p>{{ dictionary.greeting('Andreas') }}</p>

  <button (click)="useLanguage('en')">en</button>
  <button (click)="useLanguage('ja')">ja</button>
  <button (click)="useLanguage('de')">de</button>
`
})
export class HelloComponent {
  @Input() dictionary!: Dictionary;
  constructor(private translate: TranslateService) {}

  useLanguage(language: Lang) {
    this.translate.lang$.next(language);
  }
}
