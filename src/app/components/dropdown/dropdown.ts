import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { DropdownButton } from './dropdown-button/dropdown-button';
import { DropdownMenu } from './dropdown-menu/dropdown-menu';

@Component({
  selector: 'dropdown',
  standalone: false,
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss'
})
export class Dropdown implements AfterContentInit {
  @ContentChild('button') button!: DropdownButton;
  @ContentChild('menu') menu!: DropdownMenu;

  public ngAfterContentInit(): void {
    this.button.onClick = (event: MouseEvent) => {
      this.menu.isShowed.update(oldValue => !oldValue);
    }
  }
}
