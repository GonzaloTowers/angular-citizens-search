import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-census',
  templateUrl: './census.component.html',
  styleUrls: ['./census.component.scss']
})
export class CensusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  results = [{name: 'Gnome 1', age: '25'},{name: 'Gnome 2', age: '20'}];

}
