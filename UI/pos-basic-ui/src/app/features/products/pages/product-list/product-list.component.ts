import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '~core/components/modal/modal.component';

@Component({
  selector: 'app-product-list',
  imports: [ModalComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  showAddProduct: boolean;

  constructor() {
    this.showAddProduct = false;
  }

  toggleAddProductModal(value: boolean | undefined): void {
    this.showAddProduct = value === undefined ? !this.showAddProduct : value;
  }
}
