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
  currentPage: number = 1;
  postsPerPage: number = 10;
  indexOfLastPost: number = this.currentPage * this.postsPerPage;
  indexOfFirstPost: number = this.indexOfLastPost - this.postsPerPage;
  currentPosts = this.characters.splice(this.indexOfFirstPost, this.indexOfLastPost);

  // constructor é um método padrão das Classes. No Angular, ele é usado para injetar dependências no componente.
  constructor(private configService: ConfigService) { }

  // ngOnInit é executado toda vez que o componente é renderizado
  ngOnInit() {
    // Sabemos que quando fazemos uma chamada ao backend, vai levar algum tempo para o servidor nos responder.
    // O subscribe nos notifica quando tivermos uma resposta.
    this.configService.getCharacters().subscribe(characters => {
      const { results } = characters.data;
      console.log(results);
      this.characters = results;
      this.currentPosts = this.characters.slice(this.indexOfFirstPost, this.indexOfLastPost);
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

  changePostsPerPage(pageSize: number) {
    this.postsPerPage = pageSize;
    this.indexOfLastPost = this.currentPage * pageSize;
    this.indexOfFirstPost = this.indexOfLastPost - pageSize;
  }

  changeCurrentPage(indexPage: number) {
    this.currentPage = indexPage;
    // this.indexOfLastPost = this.currentPage * this.postsPerPage;
    this.currentPosts = this.characters.splice(this.indexOfFirstPost, this.indexOfLastPost);
  }

  pageEvent(length: number, event: any) {
    console.log('page event', length, event.pageSize, event);
    this.currentPage = event.pageIndex;
    this.postsPerPage = event.pageSize;
    this.indexOfLastPost = (event.pageIndex + 1) * event.pageSize;
    this.indexOfFirstPost = this.indexOfLastPost - event.pageSize;
    console.log(this.indexOfFirstPost);
    console.log(this.indexOfLastPost);
    console.log(this.postsPerPage);
    console.log(this.characters);
    this.currentPosts = this.characters.slice(this.indexOfFirstPost, this.indexOfLastPost);
  }
}
