import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '~core/components/modal/modal.component';
import { Product } from '~features/products/types/product.type';
import {
  ProductVariant,
  VariantOption,
} from '~features/products/types/productVariant.type';
import { SaleProductComponent } from '../sale-product/sale-product.component';

@Component({
  selector: 'app-sale-product-view',
  imports: [CommonModule, ModalComponent, SaleProductComponent],
  templateUrl: './sale-product-view.component.html',
  styleUrl: './sale-product-view.component.css',
})
export class SaleProductViewComponent {
  showProductDetail: boolean;
  selectedProduct: Product | undefined;
  variantSelected: ProductVariant | undefined;
  currentVariantOptions: Record<string, VariantOption[]> = {};
  productList: Product[] = [];

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
  }

  toggleProductDetailModal(value: boolean | undefined, product: Product): void {
    this.showProductDetail = value ?? !this.showProductDetail;
    if (product) {
      this.selectedProduct = product;
      this.currentVariantOptions = this.getOptionListByProduct(
        this.selectedProduct
      );
    }
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
}
