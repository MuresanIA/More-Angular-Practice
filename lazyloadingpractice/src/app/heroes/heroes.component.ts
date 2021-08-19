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
      'https://static.wikia.nocookie.net/elderscrolls/images/3/3a/Hero_of_Sovngarde_00108432.png/revision/latest/scale-to-width-down/300?cb=20200401184442'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
