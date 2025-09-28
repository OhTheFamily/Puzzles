import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'SidebarItem',
  standalone: false,
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.scss'
})
export class SidebarItem {
  @HostBinding('class') class: string = 'relative';

  public href = input.required<string>();


}
