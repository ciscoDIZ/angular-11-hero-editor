import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Spider-man' },
      { id: 12, name: 'Wolverine' },
      { id: 13, name: 'Cyclops' },
      { id: 14, name: 'Phoenix' },
      { id: 15, name: 'Cable' },
      { id: 16, name: 'Storm' },
      { id: 17, name: 'Jean Grey' },
      { id: 18, name: 'Rogue' },
      { id: 19, name: 'Elektra' },
      { id: 20, name: 'Emma Frost' }
    ];
    const villains = [
      {id: 21, name: 'Magneto'},
      {id: 22, name: 'Dr Doom'},
      {id: 23, name: 'Kingpin'},
      {id: 24, name: 'Dr Doom'},
      {id: 25, name: 'Apocalipsis'},
      {id: 26, name: 'Onslaugth'},
      {id: 27, name: 'Venom'},
      {id: 27, name: 'Octopus'},
      {id: 28, name: 'Dark Phoenix'},
      {id: 29, name: 'Sabretooth'},
      {id: 30, name: 'Mr. Sinister'},
    ];
    return {heroes, villains};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
