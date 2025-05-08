import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SaleProductViewComponent } from '~features/sales/components/sale-product-view/sale-product-view.component';
import { SaleTransactionComponent } from '~features/sales/components/sale-transaction/sale-transaction.component';
import type { Sale } from '~features/sales/types/sale.type';
import type { Transaction } from '~features/sales/types/transaction.type';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SaleProductViewComponent, SaleTransactionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  sale: Sale;

  constructor(){
    this.sale = this.getClearSale();
  }

  addSale(transaction: Transaction){
    if(this.sale.transactions.some(t => t.productVariant.guid == transaction.productVariant.guid)){
      this.sale.transactions
        .find(t => t.productVariant.guid == transaction.productVariant.guid)!.quantity += transaction.quantity;
      this.sale.transactions
        .find(t => t.productVariant.guid == transaction.productVariant.guid)!.subtotal += transaction.subtotal;
    }else{
      this.sale.transactions.push(transaction);
    }
    this.updateSale();
  }

  getClearSale(): Sale{
    return {
      transactions: [],
      subtotal: 0,
      iva: 0,
      ivaTax: 0.19,
      total: 0,
      discount: 0,
    }
  }

  updateSale(){
    this.sale.subtotal = this.calculateSubtotal();
    this.sale.iva = this.calculateIva();
    this.sale.total = this.calculateTotal();
  }

  calculateSubtotal(): number{
    return  this.sale.transactions.reduce((acc, transaction) => acc + transaction.subtotal, 0);
  }

  calculateIva(): number{
    return this.sale.subtotal * this.sale.ivaTax;
  }

  calculateTotal(): number{
    return this.sale.subtotal + this.sale.iva - this.sale.discount;
  }

  clearSale(){
    this.sale = this.getClearSale();
  }

  removeTransaction(transaction: Transaction){
    this.sale.transactions = this.sale.transactions.filter(t => t !== transaction);
    this.updateSale();
  }

  updateTransaction(transaction: Transaction){
    this.sale.transactions = this.sale.transactions.map(t => t === transaction ? transaction : t);
    this.updateSale();
  }

  applyDiscount(discount: number){
    this.sale.discount = discount;
    this.updateSale();
  }

  removeDiscount(){
    this.sale.discount = 0;
    this.updateSale();
  }
}
