import { Routes } from '@angular/router';
import { PermissionComponent } from './permission.component';

export const routes: Routes = [
    {
        path: '',
        component: PermissionComponent,       
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
