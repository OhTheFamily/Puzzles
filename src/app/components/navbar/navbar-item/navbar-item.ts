import { Component, input } from '@angular/core';

@Component({
  selector: 'NavbarItem',
  standalone: false,
  templateUrl: './navbar-item.html',
  styleUrl: './navbar-item.scss'
})
export class NavbarItem {
  public href = input.required<string>();
}
