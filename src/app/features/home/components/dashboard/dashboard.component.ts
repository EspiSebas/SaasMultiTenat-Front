import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = {
    products: 150,
    categories: 8,
    dailySales: 1250,
    totalSales: 20430
  };

  products = [
    { name: 'Camiseta Roja', category: 'Ropa', stock: 30, price: 15, status: 'EN_STOCK' },
    { name: 'Zapatos Deportivos', category: 'Calzado', stock: 5, price: 45, status: 'BAJO_MINIMO' },
    { name: 'Reloj Digital', category: 'Accesorios', stock: 0, price: 60, status: 'AGOTADO' },
    { name: 'Mochila Negra', category: 'Mochilas', stock: 20, price: 35, status: 'EN_STOCK' }
  ];

  resumen = {
    enStock: 150,
    bajoMinimo: 8,
    agotados: 3
  };

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
