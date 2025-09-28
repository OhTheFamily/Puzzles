import { Component, input } from '@angular/core';

@Component({
  selector: 'Avatar',
  standalone: false,
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class Avatar {
  public src = input<string>('');
  public initials = input<string>('');
}
