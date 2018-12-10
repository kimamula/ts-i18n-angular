import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

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
      TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
