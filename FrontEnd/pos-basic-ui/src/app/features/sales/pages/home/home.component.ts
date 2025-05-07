import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SaleProductViewComponent } from '~features/sales/components/sale-product-view/sale-product-view.component';
import { SaleTransactionComponent } from '~features/sales/components/sale-transaction/sale-transaction.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SaleProductViewComponent, SaleTransactionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
