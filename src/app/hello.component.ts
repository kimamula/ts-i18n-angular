import { Component, Input } from '@angular/core';
import { TranslateService } from './translate/translate.service';
import { Dictionary } from './translate/dictionary';

@Component({
  selector: 'app-hello',
  template: `
  <h1>{{ dictionary.title }}</h1>
  <p>{{ dictionary.greeting('Andreas') }}</p>

  <button
    *ngFor="let language of translate.availableLanguages"
    (click)="translate.lang$.next(language)">
    {{ language }}
  </button>
`
})
export class HelloComponent {
  @Input() dictionary!: Dictionary;
  constructor(public translate: TranslateService) {}
}
