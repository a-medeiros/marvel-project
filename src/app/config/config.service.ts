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
  apiUrl = 'https://gateway.marvel.com/v1/public/';
  key = `?ts=${ts}&apikey=${environment.publicKey}&hash=${hash}`;

  constructor(private http: HttpClient) { }

  // O Observable fica observando até a gente obter uma resposta do backend
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'characters' + this.key + '&limit=100');
  }

  getCharacterInformation(characterId: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'characters/' + characterId + this.key);
  }

  getComics(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'comics' + this.key + '&limit=100');
  }

  getSeries(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'series' + this.key + '&limit=100');
  }
}
