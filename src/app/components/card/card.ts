import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrl: './card.scss',
  standalone: false
})
export class CardComponent {
  public puzzle = input.required<any>();
}
