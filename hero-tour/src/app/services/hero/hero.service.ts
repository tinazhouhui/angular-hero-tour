import {Injectable} from '@angular/core';
import {Hero} from "../../interfaces/hero";
import {HEROES} from "../../mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "../message/message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { } //todo why are we adding it to the hero constructor and not to app?

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES) // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }
}
