import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'avatar',
  standalone: false,
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss'
})
export class Avatar {
  @HostBinding('attr.data-slot') slot: string = 'avatar';

  public src = input<string>('');
  public initials = input<string>('');
}
