import { Component } from '@angular/core';
import { heroes, Heroes } from './heroes';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomePage {
  title = 'Heróis';
  heroes: Heroes[] = heroes;
}
