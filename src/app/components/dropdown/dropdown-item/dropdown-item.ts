import { Component, input } from '@angular/core';

@Component({
  selector: 'dropdown-item',
  standalone: false,
  templateUrl: './dropdown-item.html',
  styleUrl: './dropdown-item.scss'
})
export class DropdownItem {
  public href = input.required<string>();
}
