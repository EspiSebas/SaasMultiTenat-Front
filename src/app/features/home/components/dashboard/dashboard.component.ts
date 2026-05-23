import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../products/services/products.service';
import { CategoryService } from '../../../categories/services/categories.service';
import { Router,RouterModule } from '@angular/router';
import { SaleService } from '../../../sales/services/sales.service';
import { HistorialService } from '../../../historial/services/historial.service';
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
    private categoryService: CategoryService,
    private allSales : HistorialService
  ){}

  
  totalProducts : any = []
  totalSales : any = []

  stats = {
    products: 0,
    categories: 0,
    dailySales: 0,
    totalSales: 0
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
    this.getSales();
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

  getSales(){
    this.allSales.getAllSales().subscribe({
      next:(data) => {
        this.totalSales = data;
        this.getStatSale();        
    },
    error: (err) => console.log(err)
    })
  }


  getStatSale(){

    const today = new Date();
    const date = today.toISOString().split('T')[0];
    this.stats.dailySales = 0;
    for (let index = 0; index < this.totalSales.length; index++) {
      const element = this.totalSales[index];
      this.stats.totalSales = this.stats.totalSales + element.total;
      if(element.date == date){
        this.stats.dailySales = this.stats.dailySales + Number(element.total);
      }
    }
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
