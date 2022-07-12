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

import { HeaderComponent } from './components/Header/Header.component';
import { CardComponent } from './components/Card/Card.component';

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
    ])
  ],
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,
    CardComponent,
    ComicsPage,
    CharacterPage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

