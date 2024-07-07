import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () => import('userFeat/Component').then(m => m.AppComponent)
     },
];
