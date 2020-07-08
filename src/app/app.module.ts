import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CensusComponent } from './census/census.component';
import { GnomeComponent } from './census/gnome/gnome.component';
import { FormsModule } from '@angular/forms';
import { Search } from './search-census.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CensusComponent,
    GnomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Search],
  bootstrap: [AppComponent]
})
export class AppModule { }
