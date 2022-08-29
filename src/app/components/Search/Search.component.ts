import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})

export class SearchComponent {
  // Utilizamos @Input para passar um valor de um componente pai para o componente filho
  // O @Output é utilizado para passar um valor do componente filho para o componente pai
  @Output() searchCharacter = new EventEmitter<string>();

  handleInput(e: any) {
    // console.log(e.target.value);
    this.searchCharacter.emit(e.target.value);
  }
}
