import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, getDoc, Firestore, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Auth } from '@angular/fire/auth';

export interface GameData {
  id?: string;
  userId: string;
  title: string;
  platform: string;
  status: 'à faire' | 'en cours' | 'terminé';
  playtime: number;
  rating?: number;
  coverImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly collectionPath: 'games' = 'games';
  constructor(private firestore: Firestore, private auth: Auth) { }

  addGame(game: GameData) {
    const gameCollection = collection(this.firestore, this.collectionPath);
    
    return new Observable((observer) => {
      const user = this.auth.currentUser;
      if (user) {
        game.userId = user.uid;
        
        addDoc(gameCollection, game)
          .then((docRef) => {
            observer.next(docRef);
            observer.complete();
          })
          .catch((error) => {
            console.error("erreur lors de l'ajout du jeu", error);
            observer.error(error);
          });
      } else {
        observer.error("Utilisateur non connecté");
      }
    })
  }

  getGames(): Observable<GameData[]> {
    const user = this.auth.currentUser;
    const gameCollection = collection(this.firestore, this.collectionPath);
    const q = query(gameCollection, where('userId', '==', user?.uid));
    return collectionData(q, { idField: 'id' }) as Observable<GameData[]>;
  }

  getGameById(id: string): Observable<GameData> {
    const gameDocument = doc(this.firestore, `${this.collectionPath}/${id}`);
    return new Observable((observer) => {
      getDoc(gameDocument)
        .then((docSnap) => {
          if (docSnap.exists()) {
            observer.next({ id: docSnap.id, ...docSnap.data() } as GameData);
            observer.complete();
          } else {
            observer.error("Jeu introuvable");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du jeu", error);
          observer.error(error);
        });
    });
  }

  updateGame(
    id: string, 
    game: Partial<GameData>
  ): Promise<void> {
    const gameDocument = doc(this.firestore, `${this.collectionPath}/${id}`);
    return updateDoc(gameDocument, game).catch((error) => {
      console.error("Erreur lors de la mise a jour du jeu", error);
    });
  }

  deleteGame(
    id: string
  ): Promise<void> {
    const gameDocument = doc(this.firestore, `${this.collectionPath}/${id}`);
    return deleteDoc(gameDocument).catch((error) => {
      console.error("Erreur lors de la suppression du jeu: ", error);
    });
  };
}