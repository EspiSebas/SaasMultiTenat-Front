import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/products.service';
import { CategoryService } from '../../../categories/services/categories.service';

@Component({
  selector: 'app-modal-update-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modal-update-product.component.html',
  styleUrl: './modal-update-product.component.css'
})
export class ModalUpdateProductComponent {

  categories: any =[];

  name = "";
  description = "";
  quantity = 0;
  price = 0;
  categoryId = 0;

  constructor(private categoryService: CategoryService , private produtService: ProductService){}

  @Input() product: any;
  @Output() productUpdated = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    this.getCategories();
    if(this.product){
      this.name = this.product.name;
      this.description = this.product.description;
      this.quantity = this.product.quantity;
      this.price = this.product.price;
      this.categoryId = this.product.category.id
    }
  }

  getCategories(){
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        console.log(data);
        this.categories = data;
        console.log(this.product)
      },
      error: (err) => console.log(err)
    });
  }
 
  
  update(){
    const data = {
      name: this.name,
      description:this.description,
      quantity:this.quantity,
      price:this.price,
      categoryId :this.categoryId
    }

    this.produtService.updateProduct(this.product.id,data).subscribe({
      next:() => {
        this.productUpdated.emit();
        this.close.emit();
        console.log("Product was updated correctly",data)
      }
    })
  
  }

  cancel(){
    this.close.emit();
  }

}
