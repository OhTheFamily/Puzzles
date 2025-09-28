import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sidebar-heading',
  standalone: false,
  templateUrl: './sidebar-heading.html',
  styleUrl: './sidebar-heading.scss'
})
export class SidebarHeading {
  @HostBinding('class') class: string = 'mb-1 px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400';
}
