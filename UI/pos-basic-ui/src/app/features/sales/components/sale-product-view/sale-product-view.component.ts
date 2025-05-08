import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '~core/components/modal/modal.component';
import { Product } from '~features/products/types/product.type';
import {
  ProductVariant,
  VariantOption,
} from '~features/products/types/productVariant.type';
import { Transaction } from '~features/sales/types/transaction.type';

@Component({
  selector: 'app-sale-product-view',
  imports: [ReactiveFormsModule, CommonModule, ModalComponent],
  templateUrl: './sale-product-view.component.html',
  styleUrl: './sale-product-view.component.css',
})
export class SaleProductViewComponent {
  showProductDetail: boolean;
  selectedProduct?: Product;
  variantSelected?: ProductVariant;
  currentVariantOptions: Record<string, VariantOption[]> = {};
  productList: Product[] = [];
  variantFormGroup: FormGroup = new FormGroup({
    quantity: new FormControl('1', [Validators.required, Validators.min(1)])
  });

  constructor() {
    this.showProductDetail = false;
    this.productList = [
      {
        guid: '01JTHKBJK86G9710AAKFJVGQCW',
        name: 'Camisa Polo',
        description: 'camisa polo',
        created_at: '2025-05-01',
        updated_at: null,
        productVariants: [
          {
            guid: '01JTHKMPC3GKTPBZZK1VAYQMCA',
            sku: 'CAM-BLANC-M',
            price: 100000,
            cost: 50000,
            currentStock: 10,
            created_at: '2025-05-01',
            updated_at: null,
            variantOptions: [
              {
                id: 1,
                option: {
                  optionId: 1,
                  optionName: 'Talla',
                  variantValue: 'M',
                },
              },
              {
                id: 2,
                option: {
                  optionId: 2,
                  optionName: 'Color',
                  variantValue: 'Blanca',
                },
              },
            ],
          },
          {
            guid: '01JTHKMPC3GKTPBZZK1VAYQMCA',
            sku: 'CAM-BLANC-L;',
            price: 100000,
            cost: 50000,
            currentStock: 10,
            created_at: '2025-05-01',
            updated_at: null,
            variantOptions: [
              {
                id: 3,
                option: {
                  optionId: 1,
                  optionName: 'Talla',
                  variantValue: 'L',
                },
              },
              {
                id: 4,
                option: {
                  optionId: 2,
                  optionName: 'Color',
                  variantValue: 'Blanca',
                },
              },
            ],
          },
          {
            guid: '01JTHKMPC3GKTPBZZK1VAYQMCA',
            sku: 'CAM-BLANC-XL;',
            price: 100000,
            cost: 50000,
            currentStock: 10,
            created_at: '2025-05-01',
            updated_at: null,
            variantOptions: [
              {
                id: 5,
                option: {
                  optionId: 1,
                  optionName: 'Talla',
                  variantValue: 'XL',
                },
              },
              {
                id: 6,
                option: {
                  optionId: 2,
                  optionName: 'Color',
                  variantValue: 'Blanca',
                },
              },
            ],
          },
        ],
      },
      {
        guid: '01JTHKV44JBQTQSJEFM7RJY2ZN',
        name: 'Gorra Basica',
        description: 'gorra basica',
        created_at: '2025-05-01',
        updated_at: null,
        productVariants: [
          {
            guid: '01JTHKW3MDGWE2F0T9END9587B',
            sku: 'Unica-NEGRA-UNIC',
            price: 50000,
            cost: 25000,
            currentStock: 5,
            created_at: '2025-05-01',
            updated_at: null,
            variantOptions: [
              {
                id: 7,
                option: {
                  optionId: 1,
                  optionName: 'Talla',
                  variantValue: 'Unica',
                },
              },
              {
                id: 8,
                option: {
                  optionId: 2,
                  optionName: 'Color',
                  variantValue: 'Negra',
                },
              },
            ],
          },
          {
            guid: '01JTHKMPC3GKTPBZZK1VAYQMCA',
            sku: 'GORR-BLANC-UNIC;',
            price: 50000,
            cost: 25000,
            currentStock: 5,
            created_at: '2025-05-01',
            updated_at: null,
            variantOptions: [
              {
                id: 9,
                option: {
                  optionId: 1,
                  optionName: 'Talla',
                  variantValue: 'Unica',
                },
              },
              {
                id: 10,
                option: {
                  optionId: 2,
                  optionName: 'Color',
                  variantValue: 'Blanca',
                },
              },
            ],
          },
        ],
      },
    ];

    this.variantFormGroup.valueChanges.subscribe((value) => this.getVariantSelected(value))
  }

  toggleProductDetailModal(value: boolean | undefined, product?: Product): void {
    this.showProductDetail = value ?? !this.showProductDetail;
    if (product) {
      this.selectedProduct = product;
      this.currentVariantOptions = this.getOptionListByProduct(this.selectedProduct);

      Object.keys(this.currentVariantOptions).forEach((key) => {
        this.variantFormGroup.addControl(key,
          new FormControl(this.currentVariantOptions[key][0].variantValue , Validators.required)
        );
      });
    }

    this.setDefaultFormValues();
  }

  getOptionListByProduct(product: Product): Record<string, VariantOption[]> {
    const variantOptionsFlat = product.productVariants.flatMap(
      (variant) => variant.variantOptions
    );

    return variantOptionsFlat.reduce<Record<string, VariantOption[]>>(
      (grouped, variant) => {
        const optionName = variant.option.optionName;
        if (!grouped[optionName]) {
          grouped[optionName] = [];
        }
        if (
          !grouped[optionName].some(
            (option) => option.variantValue === variant.option.variantValue
          )
        ) {
          grouped[optionName].push(variant.option);
        }
        return grouped;
      },
      {}
    );
  }

  getVariantSelected(value: Record<string, string>){
    if(!this.currentVariantOptions) return;

    const variantsSelected = !Object.keys(this.currentVariantOptions).some(control => value[control] === '' || !value[control])

    if(!variantsSelected) return;

    this.variantSelected = this.selectedProduct?.productVariants.find(variant => variant.variantOptions.every(option => option.option.variantValue === value[option.option.optionName]))

    if(this.variantSelected){
      this.variantFormGroup.controls['quantity'].addValidators(Validators.max(this.variantSelected.currentStock))
    }



  }

  setDefaultFormValues(){
    this.variantFormGroup.patchValue({
      quantity: '1',
      ...Object.fromEntries(
          Object.keys(this.currentVariantOptions)
            .map(key => [key, this.currentVariantOptions[key][0].variantValue])
        )
    })
  }

  @Output() addSale: EventEmitter<Transaction> = new EventEmitter()
  addToSale(){
    if(!this.variantSelected && !this.variantFormGroup.valid) return;

    const transaction: Transaction = {
      productVariant: this.variantSelected!,
      product: this.selectedProduct!,
      quantity: Number(this.variantFormGroup.controls['quantity'].value),
      subtotal: 0,
    }

    transaction.subtotal = transaction.productVariant.price * transaction.quantity;

    this.setDefaultFormValues()

    this.addSale.emit(transaction)
    this.toggleProductDetailModal(false)
  }
}
