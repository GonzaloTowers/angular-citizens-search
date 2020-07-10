import { Component } from '@angular/core';
import { Gnome } from './census/gnome/gnome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brastlewark';

  public results: Gnome[];

  onSearchParams($event) {
    this.results = $event;
  }

}
