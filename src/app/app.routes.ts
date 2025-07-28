import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: (await import('./components/layout/layout')).Layout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./home/home').then((m) => m.Home),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login').then((m) => m.Login),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register').then((m) => m.Register),
      },
      {
        path: 'add-customer',
        loadComponent: () =>
          import('./components/add-customer/add-customer').then((m) => m.AddCustomer),
      },
      {
        path: 'customers-table',
        loadComponent: () =>
          import('./components/customers-table/customers-table').then((m) => m.CustomersTable),
      }
    ]
  }
];


