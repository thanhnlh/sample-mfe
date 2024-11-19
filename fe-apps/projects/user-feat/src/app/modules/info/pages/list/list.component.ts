import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-list',
    imports: [MatButtonModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  handleNavigateToProduct() {    
    
    this.router.navigate(['/products'])    
    console.log("🚀 ~ ListComponent ~ handleNavigateToProduct ~ /products");
  }
}
