import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../shared/navbar/navbar.component';
import { HistorialService } from '../../services/historial.service';
import { CommonModule } from '@angular/common';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
@Component({
  selector: 'app-list-historial-sale',
  standalone: true,
  imports: [NavbarComponent,CommonModule,ModalDetailsComponent],
  templateUrl: './list-historial-sale.component.html',
  styleUrl: './list-historial-sale.component.css'
})
export class ListHistorialSaleComponent {
  
  selectedSale: any ;
  sales: any = [];

  showDetails = false;

  constructor(private historialService: HistorialService){}

  loadSales(){
    this.historialService.getAllSales().subscribe({
      next:(data) => {this.sales = data
        console.log(data)
      },
      error:(err) => console.log(err)
    })
  }

  ngOnInit(): void {
    this.loadSales();
  }

  openModalDetails(sale:any){
     this.selectedSale = sale
    this.showDetails = true;
  
  }

  closeModalDetails(){
    this.showDetails = false;
  }
}
