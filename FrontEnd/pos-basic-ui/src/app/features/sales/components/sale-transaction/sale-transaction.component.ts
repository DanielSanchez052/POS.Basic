import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '~core/components/modal/modal.component';

@Component({
  selector: 'app-sale-transaction',
  imports: [CommonModule, ModalComponent],
  templateUrl: './sale-transaction.component.html',
  styleUrl: './sale-transaction.component.css',
})
export class SaleTransactionComponent {
  showDiscount: boolean;
  showPayment: boolean;

  constructor() {
    this.showDiscount = false;
    this.showPayment = false;
  }

  toggleDiscountModal(value?: boolean): void {
    this.showDiscount = value ?? !this.showDiscount;
  }

  togglePaymentModal(value?: boolean): void {
    this.showPayment = value ?? !this.showPayment;
  }
}
