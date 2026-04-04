import { Component,Output,EventEmitter } from '@angular/core';
import { CategoryService } from '../../../categories/services/categories.service';
import { ProductService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-create-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modal-create-product.component.html',
  styleUrl: './modal-create-product.component.css'
})
export class ModalCreateProductComponent {

  categories: any =[];

  name = "";
  description = "";
  quantity = 0;
  price = 0;
  categoryId = 0;

  constructor(

    private categoryService: CategoryService,
    private productsService : ProductService

  ){}


  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<any>();

   ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        console.log(data);
        this.categories = data;
      },
      error: (err) => console.log(err)
    });
  }



  save(){
    const product = {
      name: this.name,
      description: this.description,
      quantity:this.quantity,
      price:this.price,
      categoryId:this.categoryId
    }

    this.productsService.createProduct(product).subscribe({
      next:() => {
        this.created.emit(product);
        this.cancel()
      }
    })
  }


  cancel(){
    this.close.emit();
  }




}
