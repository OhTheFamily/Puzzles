import { Component, signal } from '@angular/core';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: false
})
export class DashboardPage {
  public cards = signal([
    {
      titre: 'Le puzzle de Natacha',
      tempsEstime: '1h 20 min',
      description: 'Ceci est une description',
      progression: 70,
      image: 'https://picsum.photos/1900'
    },
    {
      titre: 'Presta',
      tempsEstime: '30 min',
      description: 'Ceci est une description',
      progression: 30,
      image: 'https://picsum.photos/1800'
    },
    {
      titre: 'La lune du miel',
      tempsEstime: '55 min',
      description: 'Ceci est une description',
      progression: 30,
      image: 'https://picsum.photos/1700'
    }
  ]);
}
