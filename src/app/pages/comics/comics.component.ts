import { Component } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { Comic } from 'src/app/models/comics.model';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'comics-page',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})

export class ComicsPage {
  title: string = "HQs";
  comics: Comic[] = [];
  wantedComic: string = '';
  isLoading: boolean = true;
  color: ThemePalette = 'primary';
  diameter: number = 40;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getComics().subscribe(comics => {
      this.comics = comics.data.results;
      this.isLoading = false;
    });
  }

  search(value: string) {
    this.wantedComic = value;
  }

  getComicByName() {
    this.configService.getComicsByName(this.wantedComic).subscribe(searchComics => {
      this.comics = searchComics.data.results;
    });
  }
}
