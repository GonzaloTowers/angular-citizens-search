import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../search-census.service';
import { Gnome } from './gnome/gnome';

@Component({
  selector: 'app-census',
  templateUrl: './census.component.html',
  styleUrls: ['./census.component.scss']
})
export class CensusComponent implements OnInit {

  //@Input() inhabitants: any;
  results: Gnome[] = [];

  constructor(private searchService: Search) { }

  ngOnInit() {
    this.searchService.findAllInhabitants().subscribe(data => {
      this.results = data.Brastlewark;
    }),
    error => {
      console.log("Error: " + error);
    }
  }

}
