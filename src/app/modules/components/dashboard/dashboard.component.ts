import {Component, OnInit} from '@angular/core';
import {Hero} from '../../../interfaces/hero';
import {HeroService} from '../../../services/hero.service';
import {Villain} from '../../../interfaces/villain';
import {VillainService} from '../../../services/villain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  villains: Villain[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
