import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'SidebarLabel',
  standalone: false,
  templateUrl: './sidebar-label.html',
  styleUrl: './sidebar-label.css'
})
export class SidebarLabel {
  @HostBinding('class') class: string = 'truncate';
}
