import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home').then(
            m => m.Home
            )
        },
    
    },
    {
        path: 'login',
        loadComponent: () => {
            return import('./components/login/login').then(
                m => m.Login
            )
        },
    },
    {
        path: 'register',
        loadComponent: () => {
            return import('./components/register/register').then(
                m => m.Register
            )
        },
    },
    {
        path: 'add-customer',
        loadComponent: () => {
            return import('./components/add-customer/add-customer').then(
                m => m.AddCustomer
            )
        }
    }
];
