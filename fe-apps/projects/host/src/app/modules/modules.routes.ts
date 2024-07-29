import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { CustomManifest } from './models/mfe-config';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { PokemonCardsLoaderComponent } from './pages/pokemon-cards-loader/pokemon-cards-loader.component';
import { BzWrapperComponent } from './pages/bz-wrapper/bz-wrapper.component';

//Module Route Init
export const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },           
            { path: '**', component: NotFoundComponent },
        ]
    },

];


export function getDynamicRoutes(options: CustomManifest | null): Routes {
    let lazyRoutes: Routes = [];
    if (options) {
        lazyRoutes = Object.keys(options).map(key => {
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
    }

    const routes = [
        {
            path: '',
            component: ModulesComponent,
            children: [
                { path: '', redirectTo: 'home', pathMatch: "full" as 'full' },
                { path: 'home', component: HomeComponent },
                ...lazyRoutes,    
                // {
                //     path: 'users',
                //     loadChildren: () => loadRemoteModule({
                //         type: 'module',
                //         remoteEntry: 'http://localhost:4101/remoteEntry.js',
                //         exposedModule: './routes'
                //     }).then(x => x.routes)
                // },
                // {
                //     path: 'products',
                //     loadChildren: () => loadRemoteModule({
                //         type: 'module',
                //         remoteEntry: 'http://localhost:4102/remoteEntry.js',
                //         exposedModule: './routes'
                //     }).then(x => x.routes)
                // }, //<-- ATTENTION: Enable this for common client route configuration           
                { // Angular 13+
                    path: 'orders',
                    component: WebComponentWrapper,
                    data: {                        
                        type: 'module',
                        remoteEntry: 'http://localhost:4103/remoteEntry.js',      
                        exposedModule: './web-components',
                        elementName: 'fe-app-order-feat'
                    } as WebComponentWrapperOptions
                },              
                {
                    path: 'pokemons',
                    component: PokemonCardsLoaderComponent
                },  
                {
                    path: 'pokemonsa',
                    component: BzWrapperComponent
                },    
                         
                { path: '**', component: NotFoundComponent }
            ]
        }
    ];

    return [...routes];
}

