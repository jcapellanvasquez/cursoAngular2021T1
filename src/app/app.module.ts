import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerosnalCardComponent } from './perosnal-card/perosnal-card.component';
import { DirectivasEstructuralesComponent } from './directivas-estructurales/directivas-estructurales.component';

@NgModule({
  declarations: [
    AppComponent,
    PerosnalCardComponent,
    DirectivasEstructuralesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
