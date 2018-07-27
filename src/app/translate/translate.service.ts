import { Inject, Injectable, InjectionToken } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Dictionary, Lang } from './dictionary';

export const DEFAULT_LANG = new InjectionToken<Lang>('DEFAULT_LANG');

@Injectable()
export class TranslateService {
  readonly lang$ = new ReplaySubject<Lang>(1);
  readonly dictionary$ = this.lang$.pipe(
    distinctUntilChanged(),
    switchMap<Lang, Dictionary>(lang => import(`./dictionary.${lang}`)
      .then(({ dictionary }) => dictionary))
  );

  constructor(@Inject(DEFAULT_LANG) private readonly defaultLang: Lang = 'en') {
    this.lang$.next(this.defaultLang);
  }
}

