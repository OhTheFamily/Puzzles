import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'SidebarLayout',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  standalone: false,
})
export class SidebarLayout {
  @HostBinding('class') class: string = 'relative isolate flex min-h-svh w-full bg-white max-lg:flex-col lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950';
}
