import { CommonModule } from '@angular/common';
import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-modal-create-category',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modal-create-category.component.html',
  styleUrl: './modal-create-category.component.css'
})
export class ModalCreateCategoryComponent {

  name = "";
  description = "";

  constructor(private categoryService: CategoryService){}

  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<any>();

  save(){
    const category = {
      name: this.name,
      description:this.description
    };

    this.categoryService.createCategory(category).subscribe({
      next:() => {
        this.created.emit(category);
        this.cancel()
      }
    })
  }


  cancel(){
    this.close.emit();
  }
}
