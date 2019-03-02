import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // An array of heroes
  selectedHero: Hero; // The hero we are currently viewing

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes(); // Initialize our heroes
  }

  // Set our selected hero here
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Gets the heroes provided by the hero service
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}
