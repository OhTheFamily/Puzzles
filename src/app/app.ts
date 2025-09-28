import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EChartsOption } from 'echarts';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: false
})
export class AppComponent implements OnInit {
  public puzzleForm = new FormGroup({
    titre: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', []),
    tempsEstime: new FormControl<string>('', []),
    etoiles: new FormControl<number>(3, [Validators.min(1), Validators.max(5)]),
    image: new FormControl<string>('', []),
    progression: new FormControl<number>(0, [Validators.min(0), Validators.max(100)]),
  });

  title = 'puzzles';

  viewType = signal<'grid' | 'list'>('grid');

  searchQuery: string = '';

  puzzles = [
    {
      titre: 'Puzzle Cité Perdue',
      image: 'https://picsum.photos/300/200?random=1',
      tempsEstime: '45 min',
      progression: 70,
      etoiles: '★★★★☆',
      description: "Reconstituez les ruines mystérieuses d'une cité disparue."
    },
    {
      titre: 'Le Labyrinthe Enchanté',
      image: 'https://picsum.photos/300/200?random=2',
      tempsEstime: '1h',
      progression: 40,
      etoiles: '★★★★★',
      description: "Un puzzle immersif aux allures de conte de fée."
    },
    {
      titre: 'Mystère des Galaxies',
      image: 'https://picsum.photos/300/200?random=3',
      tempsEstime: '1h30',
      progression: 90,
      etoiles: '★★★★☆',
      description: "Voyagez à travers l’espace avec ce puzzle cosmique."
    },
  ];

  // Graphique en barres
  barChartOptions: EChartsOption = {
    title: { text: 'Progression des puzzles (%)' },
    tooltip: {},
    xAxis: { data: ['Puzzle 1', 'Puzzle 2', 'Puzzle 3', 'Puzzle 4'] },
    yAxis: {},
    series: [{ type: 'bar', data: [40, 75, 90, 60], color: '#F97316' }]
  };

  // Graphique en ligne
  lineChartOptions: EChartsOption = {
    title: { text: 'Temps passé (minutes)' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'] },
    yAxis: { type: 'value' },
    series: [{ type: 'line', data: [120, 90, 150, 80, 200], smooth: true, color: '#2563EB' }]
  };

  // Graphique en camembert
  pieChartOptions: EChartsOption = {
    title: { text: 'Répartition des difficultés', left: 'center' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [{
      type: 'pie',
      radius: '70%',
      data: [
        { value: 2, name: '★' },
        { value: 5, name: '★★' },
        { value: 8, name: '★★★' },
        { value: 4, name: '★★★★' },
        { value: 1, name: '★★★★★' }
      ]
    }]
  };

  // Graphique en aires
  areaChartOptions: EChartsOption = {
    title: { text: 'Pièces assemblées par jour' },
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', boundaryGap: false, data: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'] },
    yAxis: { type: 'value' },
    series: [{
      type: 'line',
      data: [200, 350, 500, 250, 400],
      areaStyle: {},
      smooth: true,
      color: '#10B981'
    }]
  };

  public ngOnInit() {
    initFlowbite()
  }

  filteredPuzzles() {
    return this.puzzles.filter(p =>
      p.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  setViewType(type: 'grid' | 'list') {
    this.viewType.set(type);
  }

  logout() {
    // TODO: Implémente ta logique de déconnexion ici
    console.log('Déconnecté');
  }

  onSubmit() {
    if (this.puzzleForm.valid) {
      const newPuzzle = this.puzzleForm.value;
      console.log('Nouveau puzzle :', newPuzzle);
      // TODO: envoyer vers ton service / backend
    }
  }
}
