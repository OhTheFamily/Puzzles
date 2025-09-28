import { Component, effect, HostBinding, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'DropdownMenu',
  standalone: false,
  templateUrl: './dropdown-menu.html',
  styleUrl: './dropdown-menu.css'
})
export class DropdownMenu implements OnInit {
  @HostBinding('class') class: string = `dark:hidden [--anchor-gap:--spacing(2)] [--anchor-padding:--spacing(1)] data-[anchor~=end]:[--anchor-offset:6px] data-[anchor~=start]:[--anchor-offset:-6px] sm:data-[anchor~=end]:[--anchor-offset:4px] sm:data-[anchor~=start]:[--anchor-offset:-4px] isolate w-max rounded-xl p-1 outline outline-transparent focus:outline-hidden overflow-y-auto bg-white/75 backdrop-blur-xl dark:bg-zinc-800/75 shadow-lg ring-1 ring-zinc-950/10 dark:ring-white/10 dark:ring-inset supports-[grid-template-columns:subgrid]:grid supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto] transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0`; 
  
  public anchor = input.required<string>();
  public className = input('');

  public isShowed = signal<boolean>(false);

  constructor() {
    effect(() => {
      const isShowed = this.isShowed();

      if(isShowed) {
        this.class += ' dark:hidden';
      } else {
        this.class.replace('dark:hidden', '');
      }
    });
  }

  public ngOnInit(): void {
    this.class += this.className() ? ` ${this.className()}`: '';
  }
}
