import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})

export class HeaderComponent {
  title = 'Header';
  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
