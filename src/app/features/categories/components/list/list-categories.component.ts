import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CategoryService } from '../../services/categories.service';
import { ModalCreateCategoryComponent } from '../modal-create-category/modal-create-category.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,NavbarComponent,ModalCreateCategoryComponent],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListComponentCategories {

  categories: any = [];
  showCreateModal = false;

  constructor(private categoryService: CategoryService){}

  loadCategories(){
    this.categoryService.getCategories().subscribe({
      next:(data) => this.categories = data,
      error:(err) => console.log(err)
    })
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  delete(id:number){
    if(confirm('Esta seguro de eliminar la cateogria?')){
      this.categoryService.deleteCategory(id).subscribe(() => this.loadCategories())
    }
  }
  
  openModalCreate(){
    this.showCreateModal = true;
  }

  closeCreateModal() {
    this.showCreateModal = false; 
  }

  onCategoryCreated(car:any){
    this.loadCategories();
    this.closeCreateModal();
  }
}
