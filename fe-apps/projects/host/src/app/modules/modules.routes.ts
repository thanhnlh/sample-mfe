import { Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
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
            { path: 'home', component: HomeComponent }, 
            { path: '**', component: NotFoundComponent }
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
                { path: 'home', component: HomeComponent },              
                { path: '**', component: NotFoundComponent } 
            ]
        } 
    ];    
    
    return [ ...routes];
}
    
