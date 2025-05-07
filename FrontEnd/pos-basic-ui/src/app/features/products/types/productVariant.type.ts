export type ProductVariant = {
  guid: string;
  sku: string;
  price: number;
  cost: number;
  currentStock: number;
  variantOptions: ProductVariantOption[];
  created_at: string;
  updated_at: string | null;
};

export type ProductVariantOption = {
  id: number;
  option: VariantOption;
};

export type VariantOption = {
  optionId: number;
  optionName: string;
  variantValue: string;
};
