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
        picture: '../../../../assets/img/spiderman.jpeg',
        birth: new Date(1993, 10, 13),
        description: '',
        color: 'red',
      },
      {
        id: 12,
        name: 'Wolverine',
        picture: '../../../../assets/img/wolverine.gif',
        birth: null,
        description: '',
        color: 'yellow',
      },
      {
        id: 13,
        name: 'Cyclops',
        picture: '../../../../assets/img/cyclops.jpeg',
        birth: new Date(1991, 12, 1),
        description: '',
        color: 'blue',
      },
      {
        id: 14,
        name: 'Phoenix',
        picture: '../../../../assets/img/phoenix.jpeg',
        birth: null, description: '',
        color: 'orange',
      },
      {
        id: 15,
        name: 'Cable',
        picture: '../../../../assets/img/cable.jpeg',
        birth: new Date(1986, 0, 2),
        description: 'El nacimiento de Nathan Summers fue cuidadosamente orquestado por el genetista Mister Sinister. Él sabía que el ADN de' +
          ' la familia Summers era uno de los mas puros entre los mutantes.' +
          'Siendo un poderoso telépata mutante y telequinético, Nathan era tan fuerte que sus poderes se manifestaron a una edad muy ' +
          'temprana. Después de que su madre murió tratando de sacrificarlo, fue infectado por Apocalypse con el Virus Techno-Orgánico, que ' +
          'estaba destinado a matarlo, hasta que su padre lo envió al futuro distante para que pudiera recibir un tratamiento adecuado que ' +
          'pudiera salvarle la vida',
        color: 'blue',
      },
      {
        id: 16,
        name: 'Storm',
        picture: '../../../../assets/img/storm.jpeg',
        birth: new Date(1994, 12, 1),
        description: '',
        color: 'grey',
      },
      {
        id: 17,
        name: 'Legion',
        picture: '../../../../assets/img/legion.jpg',
        birth: new Date(1996, 12, 1),
        description: '',
        color: 'blue',
      },
      {
        id: 18,
        name: 'Rogue',
        picture: '../../../../assets/img/rogue.jpeg',
        birth: new Date(1995, 12, 1),
        description: '',
        color: 'yellow',
      },
      {
        id: 19, name: 'Elektra',
        picture: '../../../../assets/img/elektra.jpeg',
        birth: new Date(1984, 12, 1),
        description: '',
        color: 'red',
      },
      {
        id: 20,
        name: 'Emma Frost',
        picture: '../../../../assets/img/emmaFrost.jpeg',
        birth: new Date(1990, 12, 1),
        description: '',
        color: 'white',
      }
    ];
    const villains = [
      {
        id: 21,
        name: 'Magneto',
        picture: '../../../../assets/img/magneto.jpeg',
        birth: new Date(1920, 12, 1),
        description: '',
        color: 'violet',
      },
      {
        id: 22,
        name: 'Dr Doom',
        picture: '../../../../assets/img/drDoom.jpeg',
        birth: null,
        description: '',
        color: 'green',
      },
      {
        id: 23,
        name: 'Kingpin',
        picture: '../../../../assets/img/kinpin.jpeg',
        birth: new Date(1970, 12, 1),
        description: '',
        color: 'white',
      },
      {
        id: 24,
        name: 'Logan',
        picture: '../../../../assets/img/logan.jpg',
        birth: null, description: '',
        color: 'red',
      },
      {
        id: 25,
        name: 'Apocalypse',
        picture: '../../../../assets/img/apocalypse.jpeg',
        birth: null,
        description: '',
        color: 'grey',
      },
      {
        id: 26,
        name: 'Onslaugth',
        picture: '../../../../assets/img/onslaugth.jpg',
        birth: null,
        description: '',
        color: 'red',
      },
      {
        id: 27,
        name: 'Venom',
        picture: '../../../../assets/img/venom.jpeg',
        birth: null,
        description: '',
        color: 'black',
      },
      {
        id: 27,
        name: 'Octopus',
        picture: '../../../../assets/img/octopus.png',
        birth: new Date(1977, 12, 1),
        description: '',
        color: 'green',
      },
      {
        id: 28, name: 'Dark Phoenix',
        picture: '../../../../assets/img/darkPhoenix.jpeg',
        birth: null,
        description: '',
        color: 'red',
      },
      {
        id: 29,
        name: 'Sabretooth',
        picture: '../../../../assets/img/sabretooh.jpeg',
        birth: null,
        description: '',
        color: 'yellow',
      },
      {
        id: 30,
        name: 'Mr. Sinister',
        picture: '../../../../assets/img/mrSinester.jpeg',
        birth: null,
        description: '',
        color: 'grey',
      }
    ];
    return {heroes, villains};
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
