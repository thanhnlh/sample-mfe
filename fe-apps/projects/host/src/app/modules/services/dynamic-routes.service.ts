import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { CustomManifest, CustomRemoteConfig } from '../models/mfe-config';
import { getDynamicRoutes } from '../modules.routes';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';


export interface RouteState {
  routes: CustomRemoteConfig[] | null
}

@Injectable({
  providedIn: 'root'
})
export class DynamicRoutesService {
  private routesUrl =  environment.USING_MOCK_API ? '/api/routes' : `${environment.API_URL}/routes`;
  
  //private
  #routesState = signal<CustomRemoteConfig[]>([]);

  readonly routesState = this.#routesState.asReadonly();

  constructor(private http: HttpClient) {}

  async addProductRoute(): Promise<CustomRemoteConfig[]> {
    const rs = await firstValueFrom(this.http.post<CustomRemoteConfig[]>(this.routesUrl, {}));
    this.#routesState.set(rs);
    return rs
  }

  async deleteProductRoute(): Promise<CustomRemoteConfig[]> {
    const rs = await firstValueFrom(this.http.delete<CustomRemoteConfig[]>(this.routesUrl, {}));
    this.#routesState.set(rs);
    return rs
  }

  async getRoutes(): Promise<CustomRemoteConfig[]> {
    const rs = await firstValueFrom(this.http.get<CustomRemoteConfig[]>(this.routesUrl));
    this.#routesState.set(rs);
    return rs
  }

  private mapToCustomManifest(data: CustomRemoteConfig[]): CustomManifest {    
    
    const manifest: CustomManifest = {};

    for (const [key, config] of Object.entries(data)) {
      manifest[key] = {
        type: config.type,
        remoteEntry: config.remoteEntry,
        exposedModule: config.exposedModule,
        displayName: config.displayName,
        routePath: config.routePath,
        ngModuleName: config.ngModuleName        
      };
    }    
    return manifest;
  }

  
  async resetRoute (router: Router) {
    this.getRoutes().then(remoteConfigs => {            
      if(remoteConfigs)
      {
        const config = this.mapToCustomManifest(remoteConfigs);
        const routes = getDynamicRoutes(config);
        router.resetConfig(routes);
      }
      else
      {
        console.error("ApplicationConfig failed to APP_INITIALIZER -  remoteConfigs return null")
      }          
    });
  }
 
}
