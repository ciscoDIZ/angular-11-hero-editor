import {Component, OnInit} from '@angular/core';
import {VillainService} from '../../../services/villain.service';
import {Mutant} from '../../../interfaces/mutant';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains: Mutant[];

  constructor(private villainService: VillainService) {
  }

  ngOnInit(): void {
    this.villainService.getVillains()
      .subscribe(villains => this.villains = villains);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.villainService.addVillain({name} as Mutant).subscribe(villain => {
      this.villains.push(villain);
    });
  }

  delete(villain: Mutant): void {
    this.villains = this.villains.filter(v => v !== villain);
    this.villainService.deleteVillain(villain).subscribe();
  }
}
