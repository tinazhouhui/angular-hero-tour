import {Injectable} from '@angular/core';
import {Hero} from "../../interfaces/hero";
import {catchError, Observable, of, tap} from "rxjs";
import {MessageService} from "../message/message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) {
  }

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
  }

  httpOptions = {
    headers: new HttpHeaders(({'Content-Type': 'application/json'}))
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updatedHero'))
      )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>(`addHero`))
      )
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    return this.http.delete<Hero>(url, this.httpOptions)
      .pipe(
        tap((newHero: Hero) => this.log(`deleted hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>(`deletedHero`))
      )
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ?
          this.log(`found heroes matching "${term}"`) :
          this.log(`no heroes matching "${term}"`)
        ),
        catchError(this.handleError<Hero[]>(`searchHero`))
      )
  }
}
