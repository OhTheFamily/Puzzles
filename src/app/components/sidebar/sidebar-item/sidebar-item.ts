import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'SidebarItem',
  standalone: false,
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css'
})
export class SidebarItem {
  @HostBinding('class') class: string = 'relative';

  public href = input.required<string>();


}
