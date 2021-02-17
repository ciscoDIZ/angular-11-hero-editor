import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/components/dashboard/dashboard.component';
import { HeroDetailComponent } from './modules/components/hero-detail/hero-detail.component';
import { HeroesComponent } from './modules/components/heroes/heroes.component';
import { HeroSearchComponent } from './modules/components/hero-search/hero-search.component';
import { MessagesComponent } from './modules/components/messages/messages.component';
import { TopbarComponent } from './modules/components/topbar/topbar.component';
import { VillainsComponent } from './modules/components/villains/villains.component';
import { VillainDetailComponent } from './modules/components/villain-detail/villain-detail.component';
import {CharactersComponent} from './modules/components/characters/characters.component';
import { FooterComponent } from './modules/components/footer/footer.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        ),
        ReactiveFormsModule
    ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    TopbarComponent,
    VillainsComponent,
    VillainDetailComponent,
    CharactersComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
