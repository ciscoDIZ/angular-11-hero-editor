import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/components/dashboard/dashboard.component';
import { HeroesComponent } from './modules/components/heroes/heroes.component';
import { HeroDetailComponent } from './modules/components/hero-detail/hero-detail.component';
import {VillainsComponent} from './modules/components/villains/villains.component';
import {VillainDetailComponent} from './modules/components/villain-detail/villain-detail.component';
import {CharactersComponent} from './modules/components/characters/characters.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero-detail/:id', component: HeroDetailComponent },
  { path: 'villain-detail/:id', component: VillainDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'villains', component: VillainsComponent },
  { path: 'characters', component: CharactersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
