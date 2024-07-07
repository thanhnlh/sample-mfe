import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/modules.routes').then(x => x.routes)        
    },     
    {
        path: '**',
        redirectTo: ''
    },
];
