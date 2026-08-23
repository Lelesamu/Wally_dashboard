import { Routes } from '@angular/router';
import { HomeComponent } from './component/home-component/home-component';
import { LoginComponent } from './component/login-component/login-component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
