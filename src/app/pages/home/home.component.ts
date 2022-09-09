import { Component } from '@angular/core';
import { heroes, Heroes } from './heroes';
import { ConfigService } from 'src/app/config/config.service';
import { Character } from 'src/app/models/characters.model';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomePage {
  title = 'Heróis';
  heroes: Heroes[] = heroes;
  characters: Character[] = [];
  isLoading: boolean = true;
  wantedCharacter: string = '';
  currentPage: number = 1;
  postsPerPage: number = 10;
  total: number = 0;
  indexOfLastPost: number = this.currentPage * this.postsPerPage;
  indexOfFirstPost: number = this.indexOfLastPost - this.postsPerPage;
  currentPosts = this.characters.splice(this.indexOfFirstPost, this.indexOfLastPost);
  color: ThemePalette = 'primary';
  diameter: number = 40;

  // constructor é um método padrão das Classes. No Angular, ele é usado para injetar dependências no componente.
  constructor(private configService: ConfigService) { }

  // ngOnInit é executado toda vez que o componente é renderizado
  ngOnInit() {
    // Sabemos que quando fazemos uma chamada ao backend, vai levar algum tempo para o servidor nos responder.
    // O subscribe nos notifica quando tivermos uma resposta.
    this.configService.getCharacters().subscribe(characters => {
      const { results } = characters.data;
      this.characters = results;
      this.total = this.characters.length;
      this.currentPosts = this.characters.slice(this.indexOfFirstPost, this.indexOfLastPost);
      this.isLoading = false;
    });
  }

  search(value: string) {
    this.wantedCharacter = value;
  }

  getCharacterByName() {
    this.configService.getCharacterByName(this.wantedCharacter).subscribe(searchCharacter => {
      this.currentPosts = searchCharacter.data.results;
      this.characters = searchCharacter.data.results;
      this.total = this.currentPosts.length;
    });
  }

  pageEvent(length: number, event: any) {
    this.currentPage = event.pageIndex;
    this.postsPerPage = event.pageSize;
    this.indexOfLastPost = (event.pageIndex + 1) * event.pageSize;
    this.indexOfFirstPost = this.indexOfLastPost - event.pageSize;
    this.currentPosts = this.characters.slice(this.indexOfFirstPost, this.indexOfLastPost);
  }
}
