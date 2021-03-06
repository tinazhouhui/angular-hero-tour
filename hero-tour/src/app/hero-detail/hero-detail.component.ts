import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';
import {MessageService} from "../services/message/message.service";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../services/hero/hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    this.messageService.add('Hero detail component: Constructor')
  }

  ngOnInit(): void {
    this.messageService.add('Hero detail component: OnInit')
    this.getHero()
  }

  getHero(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }


}
