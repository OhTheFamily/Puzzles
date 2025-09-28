import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic.html',
  styleUrl: './statistic.scss',
  standalone: false
})
export class StatisticPage {
  stats = {
    solved: 1240,
    solvedDelta: 15,
    avg: 8.5,
    avgDelta: 5,
    users: 2300,
    usersDelta: 12
  };

  recentRows = [
    { title: 'Labyrinthe hexagonal', player: 'Alex Johnson', cat: 'Logique', time: '07:35' },
    { title: 'Anagramme mystère', player: 'Sophie Dubois', cat: 'Mots', time: '05:12' },
    { title: 'Sudoku expert', player: 'Lucas Moreau', cat: 'Chiffres', time: '12:48' }
  ];

  ngAfterViewInit(): void {
    // Chart lignes
    new Chart('chartSolves', {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû'],
        datasets: [{
          label: 'Puzzles résolus',
          data: [120, 150, 180, 200, 210, 250, 230, 280],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          fill: true,
          tension: 0.3
        }]
      }
    });

    // Chart doughnut
    new Chart('chartCategories', {
      type: 'doughnut',
      data: {
        labels: ['Logique', 'Mots', 'Chiffres', 'Observation', 'Énigmes'],
        datasets: [{
          data: [38, 22, 17, 14, 9],
          backgroundColor: ['#6366f1', '#f97316', '#22c55e', '#eab308', '#06b6d4']
        }]
      }
    });
  }
}
