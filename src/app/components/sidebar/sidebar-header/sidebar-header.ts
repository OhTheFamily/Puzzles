import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'SidebarHeader',
  standalone: false,
  templateUrl: './sidebar-header.html',
  styleUrl: './sidebar-header.css'
})
export class SidebarHeader {
  @HostBinding('class') class: string = 'flex flex-col border-b border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5';
}
