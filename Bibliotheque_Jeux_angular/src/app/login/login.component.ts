import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: any;
  email?: string ;
  password?: string ;
  errorMessage?: string ;
  successMessage?: string ;

  constructor(private authService: AuthService, private router: Router) { }

ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.user = user;
      console.log("Utilisateur connecté :", user);
    });
  }

  loggin() {
    if (this.email && this.password) {
      this.authService.signIn(this.email, this.password)
        .then(() => {
          this.router.navigate(['/admin']);
        })
        .catch((error) => {
          this.errorMessage = "Échec de la connexion : ";
          console.error(error);
        })

    }else {
      this.errorMessage = "Veuillez remplir tous les champs";
      
    }  
  }
  logout() {
    this.authService.signOut()
      .then(() => {
        this.successMessage = "Déconnexion réussie";
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
}
}