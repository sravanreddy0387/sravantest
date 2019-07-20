import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() { }

  updateInput() {
    this.searchService.updateSearch(this.searchText);
  }
}
