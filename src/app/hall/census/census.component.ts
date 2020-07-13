import { Component, OnInit, Input } from '@angular/core';
import { Search } from '../../search-census.service';
import { Gnome } from './gnome/gnome';

@Component({
  selector: 'app-census',
  templateUrl: './census.component.html',
  styleUrls: ['./census.component.scss']
})
export class CensusComponent implements OnInit {

  @Input() gnomes: Gnome[];

  constructor(private searchService: Search) { }

  ngOnInit() {
    this.getGnomes();
  }

  getGnomes(): void {
    this.searchService.findAllInhabitants().subscribe(data => {
      this.gnomes = data.Brastlewark;
    }),
    error => {
      console.log("Error: " + error);
    }
  }

}
