import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.component';
import { ComicsPage } from './pages/comics/comics.component';
import { CharacterPage } from './pages/character/character.component';
import { SeriesPage } from './pages/series/series.component';

import { HeaderComponent } from './components/Header/Header.component';
import { CardComponent } from './components/Card/Card.component';
import { SearchComponent } from './components/Search/Search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'comics', component: ComicsPage },
      { path: 'character/:id', component: CharacterPage },
      { path: 'series', component: SeriesPage }
    ]),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    CardComponent,
    ComicsPage,
    CharacterPage,
    SeriesPage,
    SearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

