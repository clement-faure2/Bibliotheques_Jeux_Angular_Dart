import { Injectable, NgZone } from '@angular/core';
import { Auth, authState, browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private afAuth: Auth, private ngZone: NgZone) { }

  //recupere l'utilisateur connecté
  getUser() {
    return authState(this.afAuth);
  }

  // me connecter a l'aide de l'email et du mot de passe
  async signIn(email: string, password: string) {
    try {
      await this.ngZone.run(() => setPersistence(this.afAuth, browserLocalPersistence));
      return await this.ngZone.run(() => {
        return signInWithEmailAndPassword(this.afAuth, email, password);
      });
    } catch (error) {
      console.log("Erreur lors de la connexion de l'utilisateur", error);
      throw error;
    }
  }
  // m'inscrire avec l'email et  mot de passe 
  async register(email: string, password: string) {
    try {
      return await this.ngZone.run(() => {
        return createUserWithEmailAndPassword(this.afAuth, email, password);
      });
    } catch (error) {
      console.log("Erreur lors de l'inscription de l'utilisateur", error);
      throw error;
    }
  }
  //deconnexion de l'utilisateur
  async signOut() {
    try {
      await this.ngZone.run(() => signOut(this.afAuth));

    } catch (error) {
      console.error("Erreur lors de la deconnexion de l'utilisateur", error);
      throw error;
    }
  }
}