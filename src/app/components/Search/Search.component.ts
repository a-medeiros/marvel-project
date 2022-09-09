import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})

export class SearchComponent {
  // Utilizamos @Input para passar um valor de um componente pai para o componente filho
  // O @Output é utilizado para passar um valor do componente filho para o componente pai
  @Output() searchItem = new EventEmitter<string>();

  handleInput(e: any) {
    this.searchItem.emit(e.target.value);
  }
}
