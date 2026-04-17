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

  
  totalProducts : any = []

  stats = {
    products: 0,
    categories: 0,
    dailySales: 1250,
    totalSales: 20430
  };

  products: any = []

  resumen = {
    enStock: 0,
    bajoMinimo: 0,
    agotados: 0
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
        this.totalProducts = data;
        this.getResume();
      },
      error: (err) => console.error(err)
    })
  }

  getResume(){
    this.resumen.enStock = 0;
    this.resumen.agotados = 0;
    this.resumen.bajoMinimo =0;
    
    for (let index = 0; index < this.totalProducts.length; index++) {
      const element = this.totalProducts[index];
      if(element["status"] == "EN_STOCK"){
        this.resumen.enStock++;
      }else if(element["status"] == "BAJO_MINIMO"){
        this.resumen.bajoMinimo++;
      }else{
        this.resumen.agotados++;
      }
    }
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
