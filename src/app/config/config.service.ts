import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import md5 from 'md5';

const ts = Number(new Date());
const hash = md5(ts + environment.privateKey + environment.publicKey);
console.log(hash);

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private marvelCharactersEndpoint = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${environment.publicKey}&hash=${hash}`;

  private marvelComicsEndpoint = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${environment.publicKey}&hash=${hash}`;


  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  // O Observable fica observando até a gente obter uma resposta do backend
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.marvelCharactersEndpoint);
  }

  getCharacterInformation(characterId: string): Observable<any> {
    return this.http.get<any>(`http://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${environment.publicKey}&hash=${hash}`)
  }

  getComics(): Observable<any> {
    return this.http.get<any>(this.marvelComicsEndpoint);
  }
}
