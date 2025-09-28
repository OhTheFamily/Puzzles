import { AfterContentInit, Component, ContentChild, HostBinding } from '@angular/core';
import { DropdownButton } from './dropdown-button/dropdown-button';
import { DropdownMenu } from './dropdown-menu/dropdown-menu';

@Component({
  selector: 'Dropdown',
  standalone: false,
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class Dropdown implements AfterContentInit {
  @HostBinding('class') class: string = 'relative';

  @ContentChild('button') button!: DropdownButton;
  @ContentChild('menu') menu!: DropdownMenu;

  public ngAfterContentInit(): void {
    this.button.onClick = (event: MouseEvent) => {
      this.menu.isShowed.update(oldValue => !oldValue);
    }
  }
}
