import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Villain} from '../../../interfaces/villain';
import {VillainService} from '../../../services/villain.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-villains-search',
  templateUrl: './villain-search.component.html',
  styleUrls: ['./villain-search.component.css']
})
export class VillainSearchComponent implements OnInit {
  villains$: Observable<Villain[]>;
  private searchTerms = new Subject<string>();
  constructor(private villainService: VillainService) { }

  ngOnInit(): void {
    this.villains$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.villainService.searchVillais(term))
    );
  }
  search(term: string): void{
    this.searchTerms.next(term);
  }
}
