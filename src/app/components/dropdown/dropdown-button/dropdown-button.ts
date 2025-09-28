import { Component, HostBinding, HostListener, input, OnInit } from '@angular/core';

@Component({
  selector: 'DropdownButton',
  standalone: false,
  templateUrl: './dropdown-button.html',
  styleUrl: './dropdown-button.css'
})
export class DropdownButton implements OnInit {
  @HostBinding('class') class: string = '';

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent) {
    console.log('Boite cliquée !', event);
  }

  public className = input('');

  public ngOnInit(): void {
    this.class += this.className() ? ` ${this.className()}` : '';
  }

}
