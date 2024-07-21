import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card'
import { getManifest } from '@angular-architects/module-federation';
import { CustomManifest } from './models/mfe-config';
import { getDynamicRoutes } from './modules.routes';
import { DynamicRoutesService } from './services/dynamic-routes.service';
import { X } from '@angular/cdk/keycodes';

const MATT_MODULES = [
    MatSlideToggleModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule,
    MatDividerModule, MatCardModule
];
@Component({
    selector: 'app-modules',
    standalone: true,
    providers: [],
    templateUrl: './modules.component.html',
    styleUrl: './modules.component.scss',
    imports: [RouterOutlet, RouterLink, ...MATT_MODULES]
})
export class ModulesComponent {
}
