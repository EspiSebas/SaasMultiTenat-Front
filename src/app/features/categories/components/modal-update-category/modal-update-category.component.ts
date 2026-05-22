import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '../../services/categories.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-update-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './modal-update-category.component.html',
  styleUrl: './modal-update-category.component.css'
})
export class ModalUpdateCategoryComponent {

  constructor(private categoryService: CategoryService){}

  @Input() category : any;
  @Output() categoryUpdated = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  name: String = "";
  description: String = "";

  ngOnInit() {

    if(this.category){
      this.name = this.category.name;
      this.description = this.category.description;
    }

  }

  update(){
    const data = {
      name: this.name,
      description: this.description
    }

    this.categoryService.updateCategory(this.category.id,data).subscribe({
      next: () => {
      this.categoryUpdated.emit();
      this.close.emit();
      console.log("Category was updated correctly",data);
    }
    })
  }
  
  cancel(){
    this.close.emit();
  }

}
