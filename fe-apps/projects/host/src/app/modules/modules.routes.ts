import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { CustomManifest } from './models/mfe-config';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

//Module Route Init
export const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            // { path: 'home', component: HomeComponent },
            // {
            //     path: 'users',
            //     loadChildren: () => loadRemoteModule({
            //         type: 'module',
            //         remoteEntry: 'https://tomyummfe.z8.web.core.windows.net/user-feat/remoteEntry.js',
            //         exposedModule: './routes'
            //     }).then(x => x.routes)
            // },
            // {
            //     path: 'products',
            //     loadChildren: () => loadRemoteModule({
            //         type: 'module',
            //         remoteEntry: 'https://tomyummfe.z8.web.core.windows.net/product-feat/remoteEntry.js',
            //         exposedModule: './routes'
            //     }).then(x => x.routes)
            // }, <-- ATTENTION: Enable this for common client route configuration
            { path: '**', component: NotFoundComponent },
        ]
    },

];


export function getDynamicRoutes(options: CustomManifest): Routes {
    const lazyRoutes: Routes = Object.keys(options).map(key => {
        const entry = options[key];
        return {
          path: entry.routePath,
          loadChildren: () =>
            loadRemoteModule({
              type: entry.type,
              remoteEntry: entry.remoteEntry,
              exposedModule: entry.exposedModule
            }).then(m => m[entry.ngModuleName])
        };
      });

    const routes =  [
        {
            path: '',
            component: ModulesComponent,
            children: [
                { path: '', redirectTo: 'home', pathMatch: "full" as 'full'},
                ...lazyRoutes,
                {
                    matcher: startsWith('angular3'),
                    component: WebComponentWrapper,
                    data: {
                      remoteEntry: 'https://gray-river-0b8c23a10.azurestaticapps.net/remoteEntry.js',
                      // remoteEntry: 'http://localhost:4202/remoteEntry.js',
                      remoteName: 'angular3',
                      exposedModule: './web-components',
                      elementName: 'angular3-element'
                    } as WebComponentWrapperOptions
                },
                { path: 'home', component: HomeComponent },
                { path: '**', component: NotFoundComponent }
            ]
        }
    ];

    return [ ...routes];
}

