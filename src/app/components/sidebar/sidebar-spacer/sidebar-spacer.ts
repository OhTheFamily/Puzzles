import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sidebar-spacer',
  standalone: false,
  templateUrl: './sidebar-spacer.html',
  styleUrl: './sidebar-spacer.scss'
})
export class SidebarSpacer {
  @HostBinding('class') class: string = 'mt-8 flex-1';
  @HostBinding('attr.aria-hidden') binding: boolean = true;
}
