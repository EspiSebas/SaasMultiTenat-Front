import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SaleService } from '../../services/sales.service';
import { ProductService } from '../../../products/services/products.service';

@Component({
  selector: 'app-create-sales',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule],
  templateUrl: './create-sales.component.html',
  styleUrl: './create-sales.component.css'
})
export class CreateSalesComponent {

  products: any = [];
  cart: any[] = [];
  paymentMethod: string = 'CASH';
  discount: number = 0;

  constructor(private saleService: SaleService, private productService: ProductService){}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct().subscribe({
      next:(data) => this.products = data,
      error:(err) => console.log(err)
    })    
  }

  addToCart(product: any) {

    const existing = this.cart.find(p => p.id === product.id);

    if (existing) {

      if (existing.quantity < product.stock) {
        existing.quantity++;
        existing.total = existing.quantity * existing.price;
      }
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        total: product.price
      });
    }
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(p => p.id !== item.id);
  } 

  updateQuantity(item: any) {

    if (item.quantity <= 0) {
      this.removeFromCart(item);
      return;
    }

    item.total = item.quantity * item.price;
  }


  getSubtotal(): number {
    return this.cart.reduce((acc, item) => acc + item.total, 0);
  }

  getTotal(): number {
    return (this.getSubtotal() - (this.discount || 0)) + (this.getSubtotal() - (this.discount || 0)) * 0.19;
  }


  createSale() {

    if (this.cart.length === 0) {
      alert('Agrega productos');
      return;
    }

    const sale = {
      paymentMethod: this.paymentMethod,
      discount: this.discount,
      details: this.cart.map(item => ({
        productId: item.id,
        quantity: item.quantity
      }))
    };

    console.log('Venta enviada:', sale);

    this.saleService.createSale(sale).subscribe({
      next:()=> alert('Venta creada correctamente')
    })
    this.cart = [];
    this.discount = 0;
    this.paymentMethod = 'CASH';
  }

}
