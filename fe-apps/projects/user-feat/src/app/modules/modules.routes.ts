import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

export const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,               
        children: [
            {
                path: 'info',
                loadChildren: () => import('./info/info.routes').then(x => x.routes)
            },
            {
                path: 'permission',
                loadChildren: () => import('./permission/permission.routes').then(x => x.routes)
            },
            {
                path: '**',
                redirectTo: 'info'
            }
        ]
    }
    
];
