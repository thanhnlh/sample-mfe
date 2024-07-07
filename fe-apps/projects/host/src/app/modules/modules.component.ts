import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card'

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
