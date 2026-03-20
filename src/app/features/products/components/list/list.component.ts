import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentProduct {

  products: any = [];

  constructor(private productService: ProductService) {}

  loadProducts(){
    this.productService.getProduct().subscribe({
      next:(data) => this.products = data,
      error: (err) => console.error(err)
    })
  }

  ngOnInit(): void {
    this.loadProducts();
  }

}
