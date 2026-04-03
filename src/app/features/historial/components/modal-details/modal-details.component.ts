import { Component,EventEmitter,Output,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-details.component.html',
  styleUrl: './modal-details.component.css'
})
export class ModalDetailsComponent {
  @Input() sale: any;
  @Output() close = new EventEmitter<void>();

}
