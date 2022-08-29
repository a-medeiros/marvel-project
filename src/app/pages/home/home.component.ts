import { Component } from '@angular/core';
import { heroes, Heroes } from './heroes';
import { ConfigService } from 'src/app/config/config.service';
import { Character } from 'src/app/models/characters.model';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomePage {
  title = 'Heróis';
  heroes: Heroes[] = heroes;
  characters: Character[] = [];
  wantedCharacter: string = '';

  // constructor é um método padrão das Classes. No Angular, ele é usado para injetar dependências no componente.
  constructor(private configService: ConfigService) { }

  // ngOnInit é executado toda vez que o componente é renderizado
  ngOnInit() {
    // Sabemos que quando fazemos uma chamada ao backend, vai levar algum tempo para o servidor nos responder.
    // O subscribe nos notifica quando tivermos uma resposta.
    this.configService.getCharacters().subscribe(characters => {
      this.characters = characters.data.results;
    });
  }

  // getCharacters() {
  //   this.configService.getCharacters().subscribe(data => console.log(data));
  // }

  search(value: string) {
    this.wantedCharacter = value;
  }

  getCharacterByName() {
    console.log('click teste', this.wantedCharacter);
    this.configService.getCharacterByName(this.wantedCharacter).subscribe(searchCharacter => {
      this.characters = searchCharacter.data.results;
    });
  }
}
