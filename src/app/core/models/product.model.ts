/**
 * CORE PRODUCT MODEL
 * ------------------
 * This model is deliberately generic. It does NOT know about "shirts" or
 * "perfume bottles" — it only knows about Products that carry a flexible
 * set of Attributes and Variants. Category-specific concepts (Size, Color,
 * Volume, Concentration, Strap Material, etc.) are all just *data* driven
 * by ProductAttribute definitions, never new TypeScript types.
 *
 * Adding a new vertical (perfume, watches, shoes...) means adding rows to
 * attribute config + demo data — never touching this file or the UI.
 */

/** A category the storefront can navigate to. Self-referencing for hierarchy. */
export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  description?: string;
  image?: string;
  icon?: string;
  status: 'active' | 'inactive';
  sortOrder: number;
  /** Which attribute definitions apply to products in this category (drives filters + PDP selectors) */
  attributeIds: string[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  description?: string;
  status: 'active' | 'inactive';
}

/** How an attribute should be rendered — the UI picks the control from this. */
export type AttributeInputType = 'swatch-color' | 'swatch-text' | 'select' | 'radio' | 'text';

/**
 * Defines a reusable attribute type, e.g. "Color", "Size", "Volume",
 * "Concentration", "Strap Material". Shared across categories/verticals.
 */
export interface ProductAttribute {
  id: string;
  name: string;
  slug: string;
  inputType: AttributeInputType;
  /** Whether this attribute should be exposed in the product listing filter sidebar */
  filterable: boolean;
  /** Whether this attribute defines a purchasable variant (e.g. Size/Color) vs. informational (e.g. Water Resistance) */
  definesVariant: boolean;
  unit?: string; // e.g. "ml", "mm"
  values: ProductAttributeValue[];
}

export interface ProductAttributeValue {
  id: string;
  attributeId: string;
  label: string;
  value: string;
  /** Hex code, used only when inputType === 'swatch-color' */
  colorHex?: string;
}

/** A single purchasable SKU: a specific combination of variant-defining attribute values. */
export interface ProductVariant {
  id: string;
  sku: string;
  /** attributeId -> attributeValueId, e.g. { 'attr-color': 'val-black', 'attr-size': 'val-l' } */
  attributeValueMap: Record<string, string>;
  price: number;
  salePrice?: number;
  stock: number;
  images?: string[];
}

export type ProductStatus = 'draft' | 'active' | 'archived';

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface ProductReview {
  id: string;
  productId: string;
  customerName: string;
  rating: number; // 1-5
  title?: string;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

/**
 * The generic Product. `productType` is a free-form string (e.g. 'clothing',
 * 'perfume', 'watch', 'shoes') used only for grouping/analytics — it never
 * gates which fields exist on the object. All category-specific data lives
 * in `attributes` (informational, non-purchasable specs) and `variants`
 * (purchasable SKUs), both driven by ProductAttribute definitions.
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  brandId: string;
  categoryId: string;
  subCategoryId?: string;
  productType: string; // 'clothing' | 'perfume' | 'watch' | 'shoes' | ... (open string, not a union)
  images: ProductImage[];

  /** Purchasable SKUs. Empty array means the base product itself is the only SKU. */
  variants: ProductVariant[];

  /** Informational specs not tied to a purchasable variant, e.g. Water Resistance, Fabric */
  attributes: { attributeId: string; valueIds: string[] }[];

  tags: string[];
  price: number;
  salePrice?: number;
  stock: number;
  rating: number;
  reviewCount: number;

  featured: boolean;
  newArrival: boolean;
  bestSeller: boolean;
  discountPercent?: number;
  status: ProductStatus;

  createdAt: string;
  updatedAt: string;
}

/** Lightweight shape used by ProductCardComponent so it doesn't need brand/category lookups baked in. */
export interface ProductCardViewModel {
  id: string;
  slug: string;
  name: string;
  brandName: string;
  image: string;
  hoverImage?: string;
  price: number;
  salePrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  colorSwatches?: { label: string; colorHex: string }[];
  sizes?: string[];
}
