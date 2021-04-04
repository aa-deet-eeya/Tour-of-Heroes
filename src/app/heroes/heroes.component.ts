import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] = [];
  selectedHero?: Hero;
  
  constructor(private heroService : HeroService, private msgService : MessageService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.msgService.add(`Heroes Component: Selected hero id=${hero.id}`)
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  getHeroes() : void {
    this.heroService.getHeroes().subscribe(result=> this.heroes = result)
  }
}
