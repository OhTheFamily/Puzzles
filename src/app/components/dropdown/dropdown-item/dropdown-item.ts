import { Component, input } from '@angular/core';

@Component({
  selector: 'DropdownItem',
  standalone: false,
  templateUrl: './dropdown-item.html',
  styleUrl: './dropdown-item.scss'
})
export class DropdownItem {
  public href = input.required<string>();
}
