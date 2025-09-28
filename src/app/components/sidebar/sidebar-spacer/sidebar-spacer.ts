import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'SidebarSpacer',
  standalone: false,
  templateUrl: './sidebar-spacer.html',
  styleUrl: './sidebar-spacer.css'
})
export class SidebarSpacer {
  @HostBinding('class') class: string = 'mt-8 flex-1';
  @HostBinding('attr.aria-hidden') binding: boolean = true;
}
