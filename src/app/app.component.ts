import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brastlewark';

  public results: any;

  searchEvent(event: any) {
    this.results = event;
  }

}
