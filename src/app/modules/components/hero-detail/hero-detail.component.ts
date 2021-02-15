import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
// import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Mutant} from '../../../interfaces/mutant';
import {HeroService} from '../../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Mutant;
  // formHero: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    // private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.getHero();
    /*this.formHero = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });*/
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.submitted = true;
    // console.log(this.formHero.invalid);
    // if (!this.formHero.invalid) {
    // }
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  /*get formulario() {
    return this.formHero.controls;
  }*/
}
