import { Manifest, RemoteConfig } from "@angular-architects/module-federation";

export type CustomRemoteConfig = RemoteConfig & {
  type: 'module'
  exposedModule: string;
  displayName: string;
  routePath: string;
  ngModuleName: string;  // Make ngModuleName optional if not always provided
};

export type CustomManifest = Manifest<CustomRemoteConfig>;