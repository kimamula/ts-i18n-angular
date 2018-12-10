import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Dictionary, Lang } from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  readonly lang$ = new ReplaySubject<Lang>(1);
  readonly dictionary$ = this.lang$.pipe(
    distinctUntilChanged(),
    switchMap<Lang, Dictionary>(lang => import(`./dictionary/${lang}`)
      .then(({ dictionary }) => dictionary))
  );
  readonly availableLanguages: ReadonlyArray<Lang> = ['en', 'ja', 'de'];

  constructor() {
    const index = this.availableLanguages.indexOf(navigator.language as any);
    this.lang$.next(this.availableLanguages[index] || 'en');
  }
}

