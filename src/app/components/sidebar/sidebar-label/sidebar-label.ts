import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sidebar-label',
  standalone: false,
  templateUrl: './sidebar-label.html',
  styleUrl: './sidebar-label.scss'
})
export class SidebarLabel {
  @HostBinding('class') class: string = 'truncate';
}
