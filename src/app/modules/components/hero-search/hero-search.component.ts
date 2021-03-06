import { Component, OnInit } from '@angular/core';

import {concat, merge, Observable, Subject} from 'rxjs';

import {
  debounceTime, distinctUntilChanged, map, mergeAll, switchMap
} from 'rxjs/operators';

import { Mutant } from '../../../interfaces/mutant';
import { HeroService } from '../../../services/hero.service';
import {VillainService} from '../../../services/villain.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Mutant[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private villainService: VillainService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => concat(this.heroService.searchHeroes(term), this.villainService.searchVillais(term)))
    );
  }
}
