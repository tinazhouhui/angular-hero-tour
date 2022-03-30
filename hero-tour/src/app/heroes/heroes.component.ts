import {Component, OnInit} from '@angular/core';
import {Hero} from '../interfaces/hero'
import {HeroService} from "../hero.service";

@Component({  // decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes',  // the component's CSS element selector
  templateUrl: './heroes.component.html',  // the location of the component's template file
  styleUrls: ['./heroes.component.scss']  // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }
  // do I not need to assign to a this? also what if I have like 10 services?

  ngOnInit(): void {
    this.getHeroes()
  }
   getHeroes(): void {
      this.heroes = this.heroService.getHeroes()
    }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

}
