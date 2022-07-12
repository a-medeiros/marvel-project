import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import md5 from 'md5';

const ts = Number(new Date());
const privateKey = '4cb94aecd28a4e71b9c3829f3376d4e99e34c9eb';
const publicKey = '72ea2d0b3c9ccc1228d9f4da35bb8667';
const hash = md5(ts + privateKey + publicKey);
console.log(hash);

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private marvelCharactersEndpoint = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  // private marvelCharacterIdEndpoint = `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`

  private marvelComicsEndpoint = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  // O Observable fica observando até a gente obter uma resposta do backend
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.marvelCharactersEndpoint);
  }

  getCharacterInformation(characterId: string): Observable<any> {
    return this.http.get<any>(`http://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  }

  getComics(): Observable<any> {
    return this.http.get<any>(this.marvelComicsEndpoint);
  }
}
