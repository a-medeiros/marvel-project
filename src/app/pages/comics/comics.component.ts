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
  currentPage: number = 1;
  postsPerPage: number = 10;
  total: number = 0;
  indexOfLastPost: number = this.currentPage * this.postsPerPage;
  indexOfFirstPost: number = this.indexOfLastPost - this.postsPerPage;
  currentPosts = this.comics.slice(this.indexOfFirstPost, this.indexOfLastPost);
  color: ThemePalette = 'primary';
  diameter: number = 40;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getComics().subscribe(comics => {
      this.comics = comics.data.results;
      this.total = this.comics.length;
      this.currentPosts = this.comics.slice(this.indexOfFirstPost, this.indexOfLastPost);
      this.isLoading = false;
    });
  }

  search(value: string) {
    this.wantedComic = value;
  }

  getComicByName() {
    this.configService.getComicsByName(this.wantedComic).subscribe(searchComics => {
      this.comics = searchComics.data.results;
      this.total = this.comics.length;
      this.indexOfLastPost = 1 * this.postsPerPage;
      this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage;
      this.currentPosts = this.comics.slice(this.indexOfFirstPost, this.indexOfLastPost);
    });
  }

  pageEvent(length: number, event: any) {
    this.currentPage = event.pageIndex;
    this.postsPerPage = event.pageSize;
    this.indexOfLastPost = (event.pageIndex + 1) * event.pageSize;
    this.indexOfFirstPost = this.indexOfLastPost - event.pageSize;
    this.currentPosts = this.comics.slice(this.indexOfFirstPost, this.indexOfLastPost);
  }
}
