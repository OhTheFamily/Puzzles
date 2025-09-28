import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'SidebarBody',
  standalone: false,
  templateUrl: './sidebar-body.html',
  styleUrl: './sidebar-body.scss'
})
export class SidebarBody {
  @HostBinding('class') class: string = 'flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8';
}
