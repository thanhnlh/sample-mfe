import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductComponent,       
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
