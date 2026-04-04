import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../products/services/products.service';
import { CategoryService } from '../../../categories/services/categories.service';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ){}
  
  stats = {
    products: 0,
    categories: 0,
    dailySales: 1250,
    totalSales: 20430
  };

  products: any = []

  resumen = {
    enStock: 150,
    bajoMinimo: 8,
    agotados: 3
  };


   ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }


  getProducts(){
    this.productService.getProduct().subscribe({
      next:(data) => {
        this.stats.products = data.length
        this.products = data.slice(0,4)
      },
      error: (err) => console.error(err)
    })
  }


  getCategories(){
    this.categoryService.getCategories().subscribe({
      next:(data) => this.stats.categories = data.length,
      error:(err) => console.log(err)
    })
  }

  getStatusClass(status: string) {
    return {
      'badge bg-success': status === 'EN_STOCK',
      'badge bg-warning text-dark': status === 'BAJO_MINIMO',
      'badge bg-danger': status === 'AGOTADO'
    };
  }

  getStatusLabel(status: string) {
    switch (status) {
      case 'EN_STOCK': return 'En stock';
      case 'BAJO_MINIMO': return 'Bajo mínimo';
      case 'AGOTADO': return 'Agotado';
      default: return status;
    }
  }

}
