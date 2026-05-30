import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GameData, GameService } from '../services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './game-detail.component.html',
  styleUrl: './game-detail.component.scss'
})
export class GameDetailComponent implements OnInit {
  // Le jeu à afficher
  game?: GameData;

  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit() {
    // Récupérer l'id du jeu passé dans l'url
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      // Récupérer le jeu spécifique grâce à son id
      this.gameService.getGameById(id).subscribe({
        next: (data) => {
          this.game = data;
          console.log("Détails du jeu récupérés");
        },
        error: (error: any) => {
          console.error("Erreur lors du chargement du détail", error);
        }
      });
    }
  }
}