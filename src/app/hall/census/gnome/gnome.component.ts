import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Search } from 'src/app/search-census.service';
import { Gnome } from './gnome';

@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.scss']
})
export class GnomeComponent implements OnInit {

  gnome: Gnome;

  constructor(private route: ActivatedRoute, private searchService: Search, private location: Location) { }

  ngOnInit() {
    this.getGnome();
  }

  getGnome(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.searchService.getGnome(id)
      .subscribe(gnomeData => this.gnome = gnomeData);
  }

}
