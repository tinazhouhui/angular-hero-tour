import { Component, OnInit } from '@angular/core';
import {Hero} from '../interfaces/hero'

@Component({  // decorator function that specifies the Angular metadata for the component
  selector: 'app-heroes',  // the component's CSS element selector
  templateUrl: './heroes.component.html',  // the location of the component's template file
  styleUrls: ['./heroes.component.scss']  // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
