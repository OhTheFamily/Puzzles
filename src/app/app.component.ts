import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
