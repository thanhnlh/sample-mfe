import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
        children: [
            {
                path: 'users',
                loadChildren: () => loadRemoteModule({
                    type: 'module',
                    remoteEntry: 'http://localhost:4101/remoteEntry.js',
                    exposedModule: './routes'
                }).then(x => x.routes)
            }
        ]
    }
];
