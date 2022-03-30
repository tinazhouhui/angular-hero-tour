import {Injectable} from '@angular/core';
import {Hero} from "../../interfaces/hero";
import {HEROES} from "../../mock-heroes";
import {catchError, Observable, of, tap} from "rxjs";
import {MessageService} from "../message/message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  private heroesUrl = 'api/heroes';

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed> ${error.message}`)
      return of(result as T) // todo what the heck is that?
    }
  }

  getHero(id: number): Observable<Hero | undefined> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      )

    const hero = HEROES.find(hero => hero.id === id)
    return of(hero)
  }
}
