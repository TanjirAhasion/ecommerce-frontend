import { ProductAttribute } from '../models/product.model';

/**
 * CLOTHING VERTICAL ATTRIBUTES
 * -----------------------------
 * Color/Size define purchasable variants (definesVariant: true) — the PDP
 * variant selector and admin variant matrix are built from these. Fabric
 * is informational only (definesVariant: false) — it shows as a spec on
 * the PDP and as a filter, but never generates a separate SKU.
 *
 * To launch the perfume vertical, this file is swapped for one defining
 * Volume/Concentration/Fragrance Family instead — nothing that *consumes*
 * ProductAttribute (filters, PDP selectors, admin forms) changes.
 */
export const ATTRIBUTES: ProductAttribute[] = [
  {
    id: 'attr-color',
    name: 'Color',
    slug: 'color',
    inputType: 'swatch-color',
    filterable: true,
    definesVariant: true,
    values: [
      { id: 'val-black', attributeId: 'attr-color', label: 'Black', value: 'black', colorHex: '#1C1A19' },
      { id: 'val-white', attributeId: 'attr-color', label: 'White', value: 'white', colorHex: '#F5F3EF' },
      { id: 'val-navy', attributeId: 'attr-color', label: 'Navy', value: 'navy', colorHex: '#233047' },
      { id: 'val-olive', attributeId: 'attr-color', label: 'Olive', value: 'olive', colorHex: '#5C5A3F' },
      { id: 'val-beige', attributeId: 'attr-color', label: 'Beige', value: 'beige', colorHex: '#D8CBB3' },
      { id: 'val-maroon', attributeId: 'attr-color', label: 'Maroon', value: 'maroon', colorHex: '#6E2A32' },
      { id: 'val-grey', attributeId: 'attr-color', label: 'Grey', value: 'grey', colorHex: '#8C877F' },
    ],
  },
  {
    id: 'attr-size',
    name: 'Size',
    slug: 'size',
    inputType: 'swatch-text',
    filterable: true,
    definesVariant: true,
    values: [
      { id: 'val-s', attributeId: 'attr-size', label: 'S', value: 's' },
      { id: 'val-m', attributeId: 'attr-size', label: 'M', value: 'm' },
      { id: 'val-l', attributeId: 'attr-size', label: 'L', value: 'l' },
      { id: 'val-xl', attributeId: 'attr-size', label: 'XL', value: 'xl' },
      { id: 'val-xxl', attributeId: 'attr-size', label: 'XXL', value: 'xxl' },
    ],
  },
  {
    id: 'attr-fabric',
    name: 'Fabric',
    slug: 'fabric',
    inputType: 'select',
    filterable: true,
    definesVariant: false,
    values: [
      { id: 'val-cotton', attributeId: 'attr-fabric', label: 'Cotton', value: 'cotton' },
      { id: 'val-linen', attributeId: 'attr-fabric', label: 'Linen', value: 'linen' },
      { id: 'val-denim', attributeId: 'attr-fabric', label: 'Denim', value: 'denim' },
      { id: 'val-polyester', attributeId: 'attr-fabric', label: 'Polyester Blend', value: 'polyester' },
    ],
  },
  {
    id: 'attr-fit',
    name: 'Fit',
    slug: 'fit',
    inputType: 'select',
    filterable: true,
    definesVariant: false,
    values: [
      { id: 'val-regular', attributeId: 'attr-fit', label: 'Regular', value: 'regular' },
      { id: 'val-slim', attributeId: 'attr-fit', label: 'Slim', value: 'slim' },
      { id: 'val-oversized', attributeId: 'attr-fit', label: 'Oversized', value: 'oversized' },
    ],
  },
];
