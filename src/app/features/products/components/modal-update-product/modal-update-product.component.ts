import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-modal-update-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modal-update-product.component.html',
  styleUrl: './modal-update-product.component.css'
})
export class ModalUpdateProductComponent {

  constructor(private produtService: ProductService){}

  @Input() product: any;
  @Output() productUpdated = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  name: String = "";
  description: String = "";
  



  cancel(){
    this.close.emit();
  }

}
