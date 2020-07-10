import { Component, OnInit, Input } from '@angular/core';
import { Search, IBrastlewark } from '../search-census.service';
import { Gnome } from './gnome/gnome';

@Component({
  selector: 'app-census',
  templateUrl: './census.component.html',
  styleUrls: ['./census.component.scss']
})
export class CensusComponent implements OnInit {

  @Input() inhabitants: Gnome[];

  constructor(private searchService: Search) { }

  ngOnInit() {
    this.searchService.findAllInhabitants().subscribe(data => {
      this.inhabitants = data.Brastlewark;
    }),
    error => {
      console.log("Error: " + error);
    }
  }

}
