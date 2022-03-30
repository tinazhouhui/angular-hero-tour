import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';
import {MessageService} from "../services/message/message.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  constructor(private messageService: MessageService) {
    this.messageService.add('Hero detail component: Constructor')
  }

  ngOnInit(): void {
    this.messageService.add('Hero detail component: OnInit')
  }

}
