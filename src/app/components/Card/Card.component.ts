import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})

export class CardComponent {
  @Input() name: any;
  @Input() img: any;
  @Input() description: any;
}
