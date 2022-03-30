import {Component, OnInit} from '@angular/core';
import {Hero} from '../interfaces/hero'
import {HeroService} from "../services/hero/hero.service";
import {MessageService} from "../services/message/message.service";

@Component({  // decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes',  // the component's CSS element selector
  templateUrl: './heroes.component.html',  // the location of the component's template file
  styleUrls: ['./heroes.component.scss']  // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService:MessageService) {
    this.messageService.add('Hero component: constructor')
  }

  ngOnInit(): void {
    this.messageService.add('Hero component: OnInit')
    this.getHeroes()
  }
   getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes)
    }
}
