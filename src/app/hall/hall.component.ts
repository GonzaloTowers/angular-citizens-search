import { Component, OnInit } from '@angular/core';
import { Gnome } from './census/gnome/gnome';

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.scss']
})
export class HallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public gnomeList: Gnome[];

  onSearchParams($event) {
    this.gnomeList = $event;
  }

}
