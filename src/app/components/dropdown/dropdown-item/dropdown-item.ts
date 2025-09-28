import { Component, input } from '@angular/core';

@Component({
  selector: 'DropdownItem',
  standalone: false,
  templateUrl: './dropdown-item.html',
  styleUrl: './dropdown-item.css'
})
export class DropdownItem {
  public href = input.required<string>();
}
