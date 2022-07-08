import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})

export class CardComponent {
  @Input() id: any;
  @Input() name: any;
  @Input() img: any;
  @Input() description: any;

  selectedItem(id: string) {
    console.log(id)
  }
}
