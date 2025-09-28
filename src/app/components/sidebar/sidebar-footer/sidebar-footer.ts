import { Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'SidebarFooter',
  standalone: false,
  templateUrl: './sidebar-footer.html',
  styleUrl: './sidebar-footer.scss'
})
export class SidebarFooter implements OnInit {
  @HostBinding('class') class: string = 'flex flex-col border-t border-zinc-950/5 p-4 dark:border-white/5 [&>[data-slot=section]+[data-slot=section]]:mt-2.5';

  public className = input('');

  public ngOnInit(): void {
    this.class += this.className() ? ` ${this.className()}` : '';
  }
}
