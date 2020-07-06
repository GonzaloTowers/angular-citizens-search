import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CensusComponent } from './census/census.component';
import { GnomeComponent } from './census/gnome/gnome.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CensusComponent,
    GnomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
