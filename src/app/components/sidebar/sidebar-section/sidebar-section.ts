import { Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-section',
  standalone: false,
  templateUrl: './sidebar-section.html',
  styleUrl: './sidebar-section.scss',
})
export class SidebarSection implements OnInit {
  @HostBinding('attr.data-slot') slot: string = 'section';
  @HostBinding('class') class: string = 'flex flex-col gap-0.5';

  public className = input<string>();

  public ngOnInit(): void {
    this.class += this.className() ? ` ${this.className()}` : '';
  }
}
