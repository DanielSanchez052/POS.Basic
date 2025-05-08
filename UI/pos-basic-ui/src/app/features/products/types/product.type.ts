import { ProductVariant } from "./productVariant.type";

export type Product = {
  guid: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string | null;
  productVariants: ProductVariant[];
};
