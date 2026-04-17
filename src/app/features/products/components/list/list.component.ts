import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { ProductService } from '../../services/products.service';
import { ModalCreateProductComponent } from '../modal-create-product/modal-create-product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent,ModalCreateProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponentProduct {

  products: any = [];

  showModalCreate = false;


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

  delete(id:number){
    if(confirm('Esta seguro de eliminar ese producto?')){
      this.productService.deleteProduct(id).subscribe(
        () => this.loadProducts()
      )
    }  
    
  }


  openModalCreate(){
    this.showModalCreate = true;
  }

  closeModalCreate(){
    this.showModalCreate = false;
  }

  onProductCreated(produ:any){
    this.loadProducts();
    this.showModalCreate = false;
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
