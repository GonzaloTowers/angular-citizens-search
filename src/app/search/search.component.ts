import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../search-census.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //@Output() searchResults = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  searchParams = '';

  onSearchStart() {
    alert(this.searchParams);
  }

}
