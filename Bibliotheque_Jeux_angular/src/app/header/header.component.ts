import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  // Variable pour savoir si on est connecte ou pas 
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // change les boutons du header si on est connecté ou pas 
    this.authService.getUser().subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  //se deconnecter
  onLogout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}