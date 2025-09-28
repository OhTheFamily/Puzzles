import { Component, input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: false
})
export class CardComponent {
  public puzzle = input.required<any>();
}
