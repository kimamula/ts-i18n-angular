import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DEFAULT_LANG } from './translate/translate.service';
import { HelloComponent } from './hello.component';
import { TranslateService } from './translate/translate.service';

@NgModule({
    declarations: [
      AppComponent,
      HelloComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [
      { provide: DEFAULT_LANG, useValue: 'ja' },
      TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
