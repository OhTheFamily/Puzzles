import { Component, HostBinding, input, OnInit, signal } from '@angular/core';
import { fa0, faCoffee, faHome, faChevronDown, IconDefinition, faSliders, faChartSimple, faCircleQuestion, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'icon',
  standalone: false,
  templateUrl: './icon.html',
  styleUrl: './icon.scss'
})
export class Icon implements OnInit {
  @HostBinding('attr.data-slot') slot: string = 'icon';

  public name = input.required<string>();

  public icon = signal<IconDefinition>(fa0);

  public ngOnInit(): void {
    let icon;

    switch (this.name()) {
      case 'coffee':
        icon = faCoffee;
        break;
      case 'home':
        icon = faHome;
        break;
      case 'chevron-down':
        icon = faChevronDown;
        break;
      case 'cog-8-tooth':
        icon = faSliders;
        break;
      case 'chart':
        icon = faChartSimple;
        break;
      case 'question-mark-circle':
        icon = faCircleQuestion;
        break;
      case 'sparkles':
        icon = faSprayCanSparkles;
        break;
      default:
        icon = fa0;
    }

    this.icon.set(icon);
  }
}
