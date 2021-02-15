import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mutant } from '../interfaces/mutant';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 11,
        name: 'Spider-man',
        picture: '',
        birth: new Date(1993, 10, 13),
        description: '',
        color: 'red',
        isHero: true},
      {
        id: 12,
        name: 'Wolverine',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 13,
        name: 'Cyclops',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1991, 12, 1),
        description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 14,
        name: 'Phoenix',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null, description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 15,
        name: 'Cable',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1986, 0, 2),
        description: 'El nacimiento de Nathan Summers fue cuidadosamente orquestado por el genetista Mister Sinister. Él sabía que el ADN de' +
          ' la familia Summers era uno de los mas puros entre los mutantes.' +
          'Siendo un poderoso telépata mutante y telequinético, Nathan era tan fuerte que sus poderes se manifestaron a una edad muy ' +
          'temprana. Después de que su madre murió tratando de sacrificarlo, fue infectado por Apocalypse con el Virus Techno-Orgánico, que ' +
          'estaba destinado a matarlo, hasta que su padre lo envió al futuro distante para que pudiera recibir un tratamiento adecuado que ' +
          'pudiera salvarle la vida',
        color: 'red',
        isHero: true  },
      {
        id: 16,
        name: 'Storm',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1994, 12, 1),
        description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 17,
        name: 'Legion',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1996, 12, 1),
        description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 18,
        name: 'Rogue',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1995, 12, 1),
        description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 19, name: 'Elektra',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1984, 12, 1),
        description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 20,
        name: 'Emma Frost',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1990, 12, 1),
        description: '',
        color: 'red',
        isHero: true
      },
      {
        id: 21,
        name: 'Magneto',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1920, 12, 1),
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 22,
        name: 'Dr Doom',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 23,
        name: 'Kingpin',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1970, 12, 1),
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 24,
        name: 'Logan',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null, description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 25,
        name: 'Apocalypse',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 26,
        name: 'Onslaugth',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 27,
        name: 'Venom',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 27,
        name: 'Octopus',
        picture: 'asserts/img/spiderman.jpeg',
        birth: new Date(1977, 12, 1),
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 28, name: 'Dark Phoenix',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 29,
        name: 'Sabretooth',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: false
      },
      {
        id: 30,
        name: 'Mr. Sinister',
        picture: 'asserts/img/spiderman.jpeg',
        birth: null,
        description: '',
        color: 'red',
        isHero: false
      }
    ];
    /*const villains = [];*/
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Mutant[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
