import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { Character } from 'src/app/models/characters.model';

@Component({
  selector: 'character-page',
  templateUrl: 'character.component.html',
  styleUrls: ['character.component.css'],
})

export class CharacterPage {
  title: string = 'Personagem X';
  public id: string = '';
  character: Character = {
    comics: [{ name: '' }],
    description: '',
    events: '',
    id: 0,
    modified: '',
    name: '',
    resourceURI: '',
    series: [{ name: '' }],
    stories: [{ name: '' }],
    thumbnail: '',
    urls: ''
  };

  constructor (private route: ActivatedRoute, private configService: ConfigService) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.configService.getCharacterInformation(this.id).subscribe(data => {
      this.character = data.data.results[0];
      this.character.comics = data.data.results[0].comics.items;
      this.character.series = data.data.results[0].series.items;
      this.character.stories = data.data.results[0].stories.items;
    });
  }
}
