import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  email?: string;
  password?: string;
  errorMessage?: string;
  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.email && this.password) {
      this.authService.register(this.email, this.password)
        .then(() => {
          this.router.navigate(['/admin']);
        })
        .catch((error) => {
          this.errorMessage = "Échec de l'inscription : " + error.message;
          console.error(error);
        })

    } else {
      this.errorMessage = "Veuillez remplir tous les champs";
    }
  }
}