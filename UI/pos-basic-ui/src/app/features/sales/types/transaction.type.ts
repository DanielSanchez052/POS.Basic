import { Product } from "~features/products/types/product.type"
import { ProductVariant } from "~features/products/types/productVariant.type"

export type Transaction = {
  productVariant: ProductVariant
  product: Product
  quantity: number
  subtotal: number
}


