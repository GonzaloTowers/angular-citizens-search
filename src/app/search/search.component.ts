import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../search-census.service';
import { Gnome } from '../census/gnome/gnome';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchResults = new EventEmitter<Gnome[]>();

  constructor(private searchService: Search) { }

  ngOnInit() {}

  searchParams = '';

  onSearch() {
    var results: Gnome[];
    if (this.searchParams) {
      results = this.searchService.getInhabitantByName(this.searchParams);
    } else {
      this.searchService.findAllInhabitants().subscribe(res => {
        results = res.Brastlewark;
      });
    }

    this.searchResults.emit(results);
  }

}
