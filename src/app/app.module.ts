import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './hall/search/search.component';
import { CensusComponent } from './hall/census/census.component';
import { GnomeComponent } from './hall/census/gnome/gnome.component';
import { FormsModule } from '@angular/forms';
import { Search } from './search-census.service';
import { HallComponent } from './hall/hall.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'hall', pathMatch: 'full'},
  {path: 'hall', component: HallComponent},
  {path: 'census/gnome/:id', component: GnomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CensusComponent,
    GnomeComponent,
    HallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Search],
  bootstrap: [AppComponent]
})
export class AppModule { }
