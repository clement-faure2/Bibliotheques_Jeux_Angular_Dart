import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { HomepageIndexComponent } from './homepage/index/index.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './auth.guard';
import { GameDetailComponent } from './game-detail/game-detail.component';

export const routes: Routes = [
    
    {
        path: '',
        component: HomepageIndexComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'game/:id',
        component: GameDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'sigin',
        component: SigninComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
    },

      //Toutes les autres routes redirigent vers la homepage
    {
        path: '**',
        component: NotFoundComponent
    },
];
