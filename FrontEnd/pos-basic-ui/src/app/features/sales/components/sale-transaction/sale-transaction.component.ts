import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '~core/components/modal/modal.component';
import { Sale } from '~features/sales/types/sale.type';

@Component({
  selector: 'app-sale-transaction',
  imports: [CommonModule, ModalComponent],
  templateUrl: './sale-transaction.component.html',
  styleUrl: './sale-transaction.component.css',
})
export class SaleTransactionComponent {
  @Input({required: true}) sale: Sale;
  showDiscount: boolean;
  showPayment: boolean;

  constructor() {
    this.showDiscount = false;
    this.showPayment = false;
    this.sale = {} as Sale;
  }

  toggleDiscountModal(value?: boolean): void {
    this.showDiscount = value ?? !this.showDiscount;
  }

  togglePaymentModal(value?: boolean): void {
    this.showPayment = value ?? !this.showPayment;
  }

  @Output() clearSale: EventEmitter<void> = new EventEmitter()
  setClearSale(): void {
    this.clearSale.emit();
  }

}
