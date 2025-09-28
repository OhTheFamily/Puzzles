import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'DropdownLabel',
  standalone: false,
  templateUrl: './dropdown-label.html',
  styleUrl: './dropdown-label.scss'
})
export class DropdownLabel {
  @HostBinding('class') class: string = 'col-start-2 row-start-1';
  @HostBinding('attr.data-slot') slot: string = 'label';
}
