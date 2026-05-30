import { Component, OnInit } from '@angular/core';
import { GameData, GameService } from '../services/game.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  games : GameData[] = [];
  game : Partial<GameData> = {title: '', platform: '', status: 'à faire', playtime: 0, rating: 0, coverImage: ''};
  isEditing: boolean = false;
  editingGameId: string | null = null;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe( {
      next: (games) => {
        this.games = games;
        console.log("Jeux récupérés avec succès");
      },
      error: (error: any) => {
        console.error("Erreur lors de la récupération des jeux", error);
      }
    });
  }

  //s execute lors de la soumission du formulaire pour les verifications 
  onSubmit() {
  // verifie que la note sera entre 0 et 10 si elle est supérieur ou inferieur 
  if (this.game.rating !== undefined) {
      if (this.game.rating > 10) this.game.rating = 10;
      if (this.game.rating < 0) this.game.rating = 0;
    }
  // si un champ existant est pas vide danss le titre du jeu alors j'edite le jeu sinon je le crée
  if (this.game.title) {
    if (this.isEditing && this.editingGameId) {
      this.gameService.updateGame(this.editingGameId,{
         title: this.game.title,
         platform: this.game.platform,
         status: this.game.status,
         playtime: this.game.playtime,
         rating: this.game.rating,
         coverImage: this.game.coverImage,
    },
    ).then(() => {
      console.log("Jeu mis a jour avec succes");
      this.resetForm();
    }).catch((error: any) => {
      console.error("Erreur lors de la mise a jour du jeu", error);
    });
  }else
    {
    const newGame: GameData = {
      title: this.game.title!,
      platform: this.game.platform ? this.game.platform : this.game.platform!,
      status: this.game.status ? this.game.status : 'à faire',
      playtime: this.game.playtime ? this.game.playtime : 0,
      rating: this.game.rating ? this.game.rating : 0,
      coverImage: this.game.coverImage ? this.game.coverImage : '',
      userId: '', 
      
  };
  this.gameService.addGame(newGame).subscribe({
    next: () => {
      console.log("Jeu ajouté avec succes");
      this.resetForm();
    }
  }
);
}
}
  
}
resetForm() {
    this.game = { title: '' , platform: '', status: 'à faire', playtime: 0, rating: 0, coverImage: ''};
    this.isEditing = false;
    this.editingGameId = null;
  }
  onEdit(game: GameData) {
    this.game = {
      title: game.title,
      platform: game.platform,
      status: game.status,
      playtime: game.playtime,
      rating: game.rating,
      coverImage: game.coverImage
    };
    this.editingGameId = game.id!;
    this.isEditing = true;
  }
  onDelete(game: GameData) {
    if (game.id) {
      const confiramtion =confirm(`etes vous sur de vouloir supprimer le jeu : ${game.title} ?`);

      if (confiramtion) {
        this.gameService.deleteGame(game.id).then(() => {
          console.log("Jeu supprimé avec succes");
        })
      }
  }
  }

}