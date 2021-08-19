import { Component, OnInit } from '@angular/core';
import { HeroesModel } from './heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroesModel[] = [
    new HeroesModel(
      'A test hero',
      'A test race',
      'A test power',
      "A test description",
      'https://www.mythfactoryshop.com/35384-large_default/Dragonborn-Pure-Arts-Standard-The-Elder-Scrolls-V-Skyrim.jpg'
    ),
    new HeroesModel(
      'A test hero',
      'A test race',
      'A test power',
      "A test description",
      'https://www.mythfactoryshop.com/35384-large_default/Dragonborn-Pure-Arts-Standard-The-Elder-Scrolls-V-Skyrim.jpg'
    ),
    new HeroesModel(
      'A test hero',
      'A test race',
      'A test power',
      "A test description",
      'https://www.mythfactoryshop.com/35384-large_default/Dragonborn-Pure-Arts-Standard-The-Elder-Scrolls-V-Skyrim.jpg'
    ),
    new HeroesModel(
      'A test hero',
      'A test race',
      'A test power',
      "A test description",
      'https://www.mythfactoryshop.com/35384-large_default/Dragonborn-Pure-Arts-Standard-The-Elder-Scrolls-V-Skyrim.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
