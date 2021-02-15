import {Component, OnInit} from '@angular/core';
import {HeroService} from '../../../services/hero.service';
import {VillainService} from '../../../services/villain.service';
import {Mutant} from '../../../interfaces/mutant';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  heroes: Mutant[] = [];
  villains: Mutant[] = [];
  heroesTitle: string;
  villainsTitle: string;

  constructor(private heroService: HeroService, private villainService: VillainService) {
  }

  ngOnInit(): void {
    this.getHeroes();
    this.getVillains();
    this.heroesTitle = 'Heroes';
    this.villainsTitle = 'Villanos';
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getVillains() {
    this.villainService.getVillains().subscribe(villains => this.villains = villains);
  }
}
