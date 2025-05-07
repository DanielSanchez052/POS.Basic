import { Component, Input } from '@angular/core';
import { ProductVariant } from '~features/products/types/productVariant.type';

@Component({
  selector: 'app-sale-product',
  imports: [],
  templateUrl: './sale-product.component.html',
  styleUrl: './sale-product.component.css',
})
export class SaleProductComponent {
  @Input({ required: true }) product: ProductVariant;

  constructor() {
    this.product = {} as ProductVariant;
  }
}
