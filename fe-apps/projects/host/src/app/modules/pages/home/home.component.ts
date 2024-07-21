import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DynamicRoutesService } from '../../services/dynamic-routes.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly dynamicRoutesService = inject(DynamicRoutesService);
  private router = inject(Router);

  displayedColumns: string[] = ['id', 'type', 'remoteEntry', 'exposedModule', 'ngModuleName', 'displayName', 'routePath', 'action'];

  async handleAddProductToModule() {    
    await this.dynamicRoutesService.addProductRoute();
    await this.dynamicRoutesService.resetRoute(this.router);
  }

  async handleRemoveProductFromModule() {
    await this.dynamicRoutesService.deleteProductRoute();
    await this.dynamicRoutesService.resetRoute(this.router);
  }
}
