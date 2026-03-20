import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { CategoryService } from '../../services/categories.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListComponentCategories {

  categories: any = [];

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

}
