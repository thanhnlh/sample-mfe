import { Routes } from '@angular/router';
import { InfoComponent } from './info.component';


export const routes: Routes = [
    {
        path: '',
        component: InfoComponent,       
        children: [
            {
                path: 'list',
                loadComponent: () => import('./pages/list/list.component').then(x => x.ListComponent)                
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    }
    
];
