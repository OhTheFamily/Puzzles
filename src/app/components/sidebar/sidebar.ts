import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'Sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  @HostBinding('class') class: string = 'flex h-full min-h-0 flex-col';
}
