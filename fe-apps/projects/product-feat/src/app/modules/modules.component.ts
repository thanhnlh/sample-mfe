import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-modules',
    imports: [RouterOutlet, RouterLink, MatTabsModule],
    templateUrl: './modules.component.html',
    styleUrl: './modules.component.scss'
})
export class ModulesComponent {
  links = [
    {
      label: 'Products',
      link: 'product'
    }
  ];
  activeLink = this.links[0];
}
