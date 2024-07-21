import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';

export const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,               
        children: [
            {
                path: 'product',
                loadChildren: () => import('./product/product.routes').then(x => x.routes)
            },
            {
                path: '**',
                redirectTo: 'product'
            }
        ]
    }    
];
