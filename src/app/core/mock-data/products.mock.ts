import { Product } from '../models/product.model';

/**
 * DEMO CLOTHING CATALOG (24 products)
 * Mirrors the shape ProductService would receive from a real
 * ASP.NET Core API. Swap MockProductService for HttpProductService
 * once that endpoint exists — nothing consuming Product[] changes.
 */
export const PRODUCTS: Product[] = [
{
  "id": "prod-001",
  "name": "Classic Oversized Tee",
  "slug": "classic-oversized-tee",
  "description": "Classic Oversized Tee \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Classic Oversized Tee, made to layer easily into a daily rotation.",
  "brandId": "brand-verre",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-tshirts",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-001-img-1",
      "url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900",
      "alt": "Classic Oversized Tee",
      "isPrimary": true
    },
    {
      "id": "prod-001-img-2",
      "url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&sat=-20",
      "alt": "Classic Oversized Tee alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-001-var-1",
      "sku": "PROD-001-BLACK-S",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "s"
      },
      "price": 890,
      "stock": 9
    },
    {
      "id": "prod-001-var-2",
      "sku": "PROD-001-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 890,
      "stock": 10
    },
    {
      "id": "prod-001-var-3",
      "sku": "PROD-001-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 890,
      "stock": 11
    },
    {
      "id": "prod-001-var-4",
      "sku": "PROD-001-BLACK-XL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xl"
      },
      "price": 890,
      "stock": 12
    },
    {
      "id": "prod-001-var-5",
      "sku": "PROD-001-WHITE-S",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "s"
      },
      "price": 890,
      "stock": 13
    },
    {
      "id": "prod-001-var-6",
      "sku": "PROD-001-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 890,
      "stock": 8
    },
    {
      "id": "prod-001-var-7",
      "sku": "PROD-001-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 890,
      "stock": 9
    },
    {
      "id": "prod-001-var-8",
      "sku": "PROD-001-WHITE-XL",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "xl"
      },
      "price": 890,
      "stock": 10
    },
    {
      "id": "prod-001-var-9",
      "sku": "PROD-001-OLIVE-S",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "s"
      },
      "price": 890,
      "stock": 11
    },
    {
      "id": "prod-001-var-10",
      "sku": "PROD-001-OLIVE-M",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "m"
      },
      "price": 890,
      "stock": 12
    },
    {
      "id": "prod-001-var-11",
      "sku": "PROD-001-OLIVE-L",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "l"
      },
      "price": 890,
      "stock": 13
    },
    {
      "id": "prod-001-var-12",
      "sku": "PROD-001-OLIVE-XL",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "xl"
      },
      "price": 890,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-oversized"
      ]
    }
  ],
  "tags": [
    "cotton",
    "oversized"
  ],
  "price": 890,
  "stock": 34,
  "rating": 4.1,
  "reviewCount": 11,
  "featured": true,
  "newArrival": true,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-002",
  "name": "Everyday Crew Neck Tee",
  "slug": "everyday-crew-neck-tee",
  "description": "Everyday Crew Neck Tee \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Everyday Crew Neck Tee, made to layer easily into a daily rotation.",
  "brandId": "brand-verre",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-tshirts",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-002-img-1",
      "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900",
      "alt": "Everyday Crew Neck Tee",
      "isPrimary": true
    },
    {
      "id": "prod-002-img-2",
      "url": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&sat=-20",
      "alt": "Everyday Crew Neck Tee alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-002-var-1",
      "sku": "PROD-002-WHITE-S",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "s"
      },
      "price": 690,
      "stock": 9
    },
    {
      "id": "prod-002-var-2",
      "sku": "PROD-002-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 690,
      "stock": 10
    },
    {
      "id": "prod-002-var-3",
      "sku": "PROD-002-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 690,
      "stock": 11
    },
    {
      "id": "prod-002-var-4",
      "sku": "PROD-002-WHITE-XL",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "xl"
      },
      "price": 690,
      "stock": 12
    },
    {
      "id": "prod-002-var-5",
      "sku": "PROD-002-WHITE-XXL",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "xxl"
      },
      "price": 690,
      "stock": 13
    },
    {
      "id": "prod-002-var-6",
      "sku": "PROD-002-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 690,
      "stock": 8
    },
    {
      "id": "prod-002-var-7",
      "sku": "PROD-002-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 690,
      "stock": 9
    },
    {
      "id": "prod-002-var-8",
      "sku": "PROD-002-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 690,
      "stock": 10
    },
    {
      "id": "prod-002-var-9",
      "sku": "PROD-002-NAVY-XL",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "xl"
      },
      "price": 690,
      "stock": 11
    },
    {
      "id": "prod-002-var-10",
      "sku": "PROD-002-NAVY-XXL",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "xxl"
      },
      "price": 690,
      "stock": 12
    },
    {
      "id": "prod-002-var-11",
      "sku": "PROD-002-GREY-S",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "s"
      },
      "price": 690,
      "stock": 13
    },
    {
      "id": "prod-002-var-12",
      "sku": "PROD-002-GREY-M",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "m"
      },
      "price": 690,
      "stock": 8
    },
    {
      "id": "prod-002-var-13",
      "sku": "PROD-002-GREY-L",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "l"
      },
      "price": 690,
      "stock": 9
    },
    {
      "id": "prod-002-var-14",
      "sku": "PROD-002-GREY-XL",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "xl"
      },
      "price": 690,
      "stock": 10
    },
    {
      "id": "prod-002-var-15",
      "sku": "PROD-002-GREY-XXL",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "xxl"
      },
      "price": 690,
      "stock": 11
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "cotton",
    "regular"
  ],
  "price": 690,
  "stock": 28,
  "rating": 4.4,
  "reviewCount": 14,
  "featured": false,
  "newArrival": false,
  "bestSeller": true,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-003",
  "name": "Slim Fit Oxford Shirt",
  "slug": "slim-fit-oxford-shirt",
  "description": "Slim Fit Oxford Shirt \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Slim Fit Oxford Shirt, made to layer easily into a daily rotation.",
  "brandId": "brand-northline",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-shirts",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-003-img-1",
      "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900",
      "alt": "Slim Fit Oxford Shirt",
      "isPrimary": true
    },
    {
      "id": "prod-003-img-2",
      "url": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=900&sat=-20",
      "alt": "Slim Fit Oxford Shirt alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-003-var-1",
      "sku": "PROD-003-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 1490,
      "salePrice": 1190,
      "stock": 9
    },
    {
      "id": "prod-003-var-2",
      "sku": "PROD-003-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 1490,
      "salePrice": 1190,
      "stock": 10
    },
    {
      "id": "prod-003-var-3",
      "sku": "PROD-003-WHITE-XL",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "xl"
      },
      "price": 1490,
      "salePrice": 1190,
      "stock": 11
    },
    {
      "id": "prod-003-var-4",
      "sku": "PROD-003-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 1490,
      "salePrice": 1190,
      "stock": 12
    },
    {
      "id": "prod-003-var-5",
      "sku": "PROD-003-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 1490,
      "salePrice": 1190,
      "stock": 13
    },
    {
      "id": "prod-003-var-6",
      "sku": "PROD-003-NAVY-XL",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "xl"
      },
      "price": 1490,
      "salePrice": 1190,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-slim"
      ]
    }
  ],
  "tags": [
    "cotton",
    "slim"
  ],
  "price": 1490,
  "salePrice": 1190,
  "stock": 22,
  "rating": 4.6,
  "reviewCount": 17,
  "featured": true,
  "newArrival": false,
  "bestSeller": false,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-004",
  "name": "Linen Resort Shirt",
  "slug": "linen-resort-shirt",
  "description": "Linen Resort Shirt \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Linen Resort Shirt, made to layer easily into a daily rotation.",
  "brandId": "brand-aiden",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-shirts",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-004-img-1",
      "url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900",
      "alt": "Linen Resort Shirt",
      "isPrimary": true
    },
    {
      "id": "prod-004-img-2",
      "url": "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&sat=-20",
      "alt": "Linen Resort Shirt alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-004-var-1",
      "sku": "PROD-004-BEIGE-M",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "m"
      },
      "price": 1690,
      "stock": 9
    },
    {
      "id": "prod-004-var-2",
      "sku": "PROD-004-BEIGE-L",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "l"
      },
      "price": 1690,
      "stock": 10
    },
    {
      "id": "prod-004-var-3",
      "sku": "PROD-004-BEIGE-XL",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "xl"
      },
      "price": 1690,
      "stock": 11
    },
    {
      "id": "prod-004-var-4",
      "sku": "PROD-004-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 1690,
      "stock": 12
    },
    {
      "id": "prod-004-var-5",
      "sku": "PROD-004-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 1690,
      "stock": 13
    },
    {
      "id": "prod-004-var-6",
      "sku": "PROD-004-WHITE-XL",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "xl"
      },
      "price": 1690,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-linen"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "linen",
    "regular"
  ],
  "price": 1690,
  "stock": 16,
  "rating": 4.9,
  "reviewCount": 20,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-005",
  "name": "Heavyweight Pullover Hoodie",
  "slug": "heavyweight-pullover-hoodie",
  "description": "Heavyweight Pullover Hoodie \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Heavyweight Pullover Hoodie, made to layer easily into a daily rotation.",
  "brandId": "brand-verre",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-hoodies",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-005-img-1",
      "url": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900",
      "alt": "Heavyweight Pullover Hoodie",
      "isPrimary": true
    },
    {
      "id": "prod-005-img-2",
      "url": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&sat=-20",
      "alt": "Heavyweight Pullover Hoodie alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-005-var-1",
      "sku": "PROD-005-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 1990,
      "stock": 9
    },
    {
      "id": "prod-005-var-2",
      "sku": "PROD-005-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 1990,
      "stock": 10
    },
    {
      "id": "prod-005-var-3",
      "sku": "PROD-005-BLACK-XL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xl"
      },
      "price": 1990,
      "stock": 11
    },
    {
      "id": "prod-005-var-4",
      "sku": "PROD-005-BLACK-XXL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xxl"
      },
      "price": 1990,
      "stock": 12
    },
    {
      "id": "prod-005-var-5",
      "sku": "PROD-005-GREY-M",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "m"
      },
      "price": 1990,
      "stock": 13
    },
    {
      "id": "prod-005-var-6",
      "sku": "PROD-005-GREY-L",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "l"
      },
      "price": 1990,
      "stock": 8
    },
    {
      "id": "prod-005-var-7",
      "sku": "PROD-005-GREY-XL",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "xl"
      },
      "price": 1990,
      "stock": 9
    },
    {
      "id": "prod-005-var-8",
      "sku": "PROD-005-GREY-XXL",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "xxl"
      },
      "price": 1990,
      "stock": 10
    },
    {
      "id": "prod-005-var-9",
      "sku": "PROD-005-MAROON-M",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "m"
      },
      "price": 1990,
      "stock": 11
    },
    {
      "id": "prod-005-var-10",
      "sku": "PROD-005-MAROON-L",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "l"
      },
      "price": 1990,
      "stock": 12
    },
    {
      "id": "prod-005-var-11",
      "sku": "PROD-005-MAROON-XL",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "xl"
      },
      "price": 1990,
      "stock": 13
    },
    {
      "id": "prod-005-var-12",
      "sku": "PROD-005-MAROON-XXL",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "xxl"
      },
      "price": 1990,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-oversized"
      ]
    }
  ],
  "tags": [
    "cotton",
    "oversized"
  ],
  "price": 1990,
  "stock": 40,
  "rating": 3.8,
  "reviewCount": 23,
  "featured": true,
  "newArrival": false,
  "bestSeller": true,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-006",
  "name": "Zip-Up Fleece Hoodie",
  "slug": "zip-up-fleece-hoodie",
  "description": "Zip-Up Fleece Hoodie \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Zip-Up Fleece Hoodie, made to layer easily into a daily rotation.",
  "brandId": "brand-northline",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-hoodies",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-006-img-1",
      "url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900",
      "alt": "Zip-Up Fleece Hoodie",
      "isPrimary": true
    },
    {
      "id": "prod-006-img-2",
      "url": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=900&sat=-20",
      "alt": "Zip-Up Fleece Hoodie alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-006-var-1",
      "sku": "PROD-006-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 9
    },
    {
      "id": "prod-006-var-2",
      "sku": "PROD-006-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 10
    },
    {
      "id": "prod-006-var-3",
      "sku": "PROD-006-NAVY-XL",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "xl"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 11
    },
    {
      "id": "prod-006-var-4",
      "sku": "PROD-006-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 12
    },
    {
      "id": "prod-006-var-5",
      "sku": "PROD-006-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 13
    },
    {
      "id": "prod-006-var-6",
      "sku": "PROD-006-BLACK-XL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xl"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-polyester"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "polyester",
    "regular"
  ],
  "price": 2190,
  "salePrice": 1750,
  "stock": 34,
  "rating": 4.1,
  "reviewCount": 26,
  "featured": false,
  "newArrival": false,
  "bestSeller": false,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-007",
  "name": "Straight Fit Denim Jeans",
  "slug": "straight-fit-denim-jeans",
  "description": "Straight Fit Denim Jeans \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Straight Fit Denim Jeans, made to layer easily into a daily rotation.",
  "brandId": "brand-aiden",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-jeans",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-007-img-1",
      "url": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900",
      "alt": "Straight Fit Denim Jeans",
      "isPrimary": true
    },
    {
      "id": "prod-007-img-2",
      "url": "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&sat=-20",
      "alt": "Straight Fit Denim Jeans alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-007-var-1",
      "sku": "PROD-007-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 2290,
      "stock": 9
    },
    {
      "id": "prod-007-var-2",
      "sku": "PROD-007-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 2290,
      "stock": 10
    },
    {
      "id": "prod-007-var-3",
      "sku": "PROD-007-NAVY-XL",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "xl"
      },
      "price": 2290,
      "stock": 11
    },
    {
      "id": "prod-007-var-4",
      "sku": "PROD-007-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 2290,
      "stock": 12
    },
    {
      "id": "prod-007-var-5",
      "sku": "PROD-007-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 2290,
      "stock": 13
    },
    {
      "id": "prod-007-var-6",
      "sku": "PROD-007-BLACK-XL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xl"
      },
      "price": 2290,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-denim"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "denim",
    "regular"
  ],
  "price": 2290,
  "stock": 28,
  "rating": 4.4,
  "reviewCount": 29,
  "featured": false,
  "newArrival": false,
  "bestSeller": true,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-008",
  "name": "Slim Tapered Denim Jeans",
  "slug": "slim-tapered-denim-jeans",
  "description": "Slim Tapered Denim Jeans \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Slim Tapered Denim Jeans, made to layer easily into a daily rotation.",
  "brandId": "brand-loom",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-jeans",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-008-img-1",
      "url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900",
      "alt": "Slim Tapered Denim Jeans",
      "isPrimary": true
    },
    {
      "id": "prod-008-img-2",
      "url": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&sat=-20",
      "alt": "Slim Tapered Denim Jeans alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-008-var-1",
      "sku": "PROD-008-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 2390,
      "stock": 9
    },
    {
      "id": "prod-008-var-2",
      "sku": "PROD-008-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 2390,
      "stock": 10
    },
    {
      "id": "prod-008-var-3",
      "sku": "PROD-008-BLACK-XL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xl"
      },
      "price": 2390,
      "stock": 11
    },
    {
      "id": "prod-008-var-4",
      "sku": "PROD-008-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 2390,
      "stock": 12
    },
    {
      "id": "prod-008-var-5",
      "sku": "PROD-008-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 2390,
      "stock": 13
    },
    {
      "id": "prod-008-var-6",
      "sku": "PROD-008-NAVY-XL",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "xl"
      },
      "price": 2390,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-denim"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-slim"
      ]
    }
  ],
  "tags": [
    "denim",
    "slim"
  ],
  "price": 2390,
  "stock": 22,
  "rating": 4.6,
  "reviewCount": 32,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-009",
  "name": "Track Joggers",
  "slug": "track-joggers",
  "description": "Track Joggers \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Track Joggers, made to layer easily into a daily rotation.",
  "brandId": "brand-verre",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-joggers",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-009-img-1",
      "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=900",
      "alt": "Track Joggers",
      "isPrimary": true
    },
    {
      "id": "prod-009-img-2",
      "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=900&sat=-20",
      "alt": "Track Joggers alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-009-var-1",
      "sku": "PROD-009-BLACK-S",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "s"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 9
    },
    {
      "id": "prod-009-var-2",
      "sku": "PROD-009-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 10
    },
    {
      "id": "prod-009-var-3",
      "sku": "PROD-009-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 11
    },
    {
      "id": "prod-009-var-4",
      "sku": "PROD-009-BLACK-XL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xl"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 12
    },
    {
      "id": "prod-009-var-5",
      "sku": "PROD-009-GREY-S",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "s"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 13
    },
    {
      "id": "prod-009-var-6",
      "sku": "PROD-009-GREY-M",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "m"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 8
    },
    {
      "id": "prod-009-var-7",
      "sku": "PROD-009-GREY-L",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "l"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 9
    },
    {
      "id": "prod-009-var-8",
      "sku": "PROD-009-GREY-XL",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "xl"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 10
    },
    {
      "id": "prod-009-var-9",
      "sku": "PROD-009-OLIVE-S",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "s"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 11
    },
    {
      "id": "prod-009-var-10",
      "sku": "PROD-009-OLIVE-M",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "m"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 12
    },
    {
      "id": "prod-009-var-11",
      "sku": "PROD-009-OLIVE-L",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "l"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 13
    },
    {
      "id": "prod-009-var-12",
      "sku": "PROD-009-OLIVE-XL",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "xl"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-polyester"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "polyester",
    "regular"
  ],
  "price": 1290,
  "salePrice": 1030,
  "stock": 16,
  "rating": 4.9,
  "reviewCount": 35,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-010",
  "name": "Fleece Lounge Joggers",
  "slug": "fleece-lounge-joggers",
  "description": "Fleece Lounge Joggers \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Fleece Lounge Joggers, made to layer easily into a daily rotation.",
  "brandId": "brand-northline",
  "categoryId": "cat-men",
  "subCategoryId": "cat-mens-joggers",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-010-img-1",
      "url": "https://images.unsplash.com/photo-1483118714900-540cf339fd46?w=900",
      "alt": "Fleece Lounge Joggers",
      "isPrimary": true
    },
    {
      "id": "prod-010-img-2",
      "url": "https://images.unsplash.com/photo-1483118714900-540cf339fd46?w=900&sat=-20",
      "alt": "Fleece Lounge Joggers alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-010-var-1",
      "sku": "PROD-010-GREY-M",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "m"
      },
      "price": 1390,
      "stock": 9
    },
    {
      "id": "prod-010-var-2",
      "sku": "PROD-010-GREY-L",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "l"
      },
      "price": 1390,
      "stock": 10
    },
    {
      "id": "prod-010-var-3",
      "sku": "PROD-010-GREY-XL",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "xl"
      },
      "price": 1390,
      "stock": 11
    },
    {
      "id": "prod-010-var-4",
      "sku": "PROD-010-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 1390,
      "stock": 12
    },
    {
      "id": "prod-010-var-5",
      "sku": "PROD-010-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 1390,
      "stock": 13
    },
    {
      "id": "prod-010-var-6",
      "sku": "PROD-010-BLACK-XL",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "xl"
      },
      "price": 1390,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "cotton",
    "regular"
  ],
  "price": 1390,
  "stock": 40,
  "rating": 3.8,
  "reviewCount": 38,
  "featured": false,
  "newArrival": false,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-011",
  "name": "Relaxed Cotton Blouse",
  "slug": "relaxed-cotton-blouse",
  "description": "Relaxed Cotton Blouse \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Relaxed Cotton Blouse, made to layer easily into a daily rotation.",
  "brandId": "brand-kinfolk",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-tops",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-011-img-1",
      "url": "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=900",
      "alt": "Relaxed Cotton Blouse",
      "isPrimary": true
    },
    {
      "id": "prod-011-img-2",
      "url": "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=900&sat=-20",
      "alt": "Relaxed Cotton Blouse alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-011-var-1",
      "sku": "PROD-011-WHITE-S",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "s"
      },
      "price": 990,
      "stock": 9
    },
    {
      "id": "prod-011-var-2",
      "sku": "PROD-011-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 990,
      "stock": 10
    },
    {
      "id": "prod-011-var-3",
      "sku": "PROD-011-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 990,
      "stock": 11
    },
    {
      "id": "prod-011-var-4",
      "sku": "PROD-011-BEIGE-S",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "s"
      },
      "price": 990,
      "stock": 12
    },
    {
      "id": "prod-011-var-5",
      "sku": "PROD-011-BEIGE-M",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "m"
      },
      "price": 990,
      "stock": 13
    },
    {
      "id": "prod-011-var-6",
      "sku": "PROD-011-BEIGE-L",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "l"
      },
      "price": 990,
      "stock": 8
    },
    {
      "id": "prod-011-var-7",
      "sku": "PROD-011-MAROON-S",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "s"
      },
      "price": 990,
      "stock": 9
    },
    {
      "id": "prod-011-var-8",
      "sku": "PROD-011-MAROON-M",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "m"
      },
      "price": 990,
      "stock": 10
    },
    {
      "id": "prod-011-var-9",
      "sku": "PROD-011-MAROON-L",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "l"
      },
      "price": 990,
      "stock": 11
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "cotton",
    "regular"
  ],
  "price": 990,
  "stock": 34,
  "rating": 4.1,
  "reviewCount": 41,
  "featured": true,
  "newArrival": true,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-012",
  "name": "Ribbed Fitted Top",
  "slug": "ribbed-fitted-top",
  "description": "Ribbed Fitted Top \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Ribbed Fitted Top, made to layer easily into a daily rotation.",
  "brandId": "brand-maren",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-tops",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-012-img-1",
      "url": "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=900",
      "alt": "Ribbed Fitted Top",
      "isPrimary": true
    },
    {
      "id": "prod-012-img-2",
      "url": "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=900&sat=-20",
      "alt": "Ribbed Fitted Top alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-012-var-1",
      "sku": "PROD-012-BLACK-S",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "s"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 9
    },
    {
      "id": "prod-012-var-2",
      "sku": "PROD-012-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 10
    },
    {
      "id": "prod-012-var-3",
      "sku": "PROD-012-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 11
    },
    {
      "id": "prod-012-var-4",
      "sku": "PROD-012-WHITE-S",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "s"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 12
    },
    {
      "id": "prod-012-var-5",
      "sku": "PROD-012-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 13
    },
    {
      "id": "prod-012-var-6",
      "sku": "PROD-012-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 8
    },
    {
      "id": "prod-012-var-7",
      "sku": "PROD-012-OLIVE-S",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "s"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 9
    },
    {
      "id": "prod-012-var-8",
      "sku": "PROD-012-OLIVE-M",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "m"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 10
    },
    {
      "id": "prod-012-var-9",
      "sku": "PROD-012-OLIVE-L",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "l"
      },
      "price": 750,
      "salePrice": 600,
      "stock": 11
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-slim"
      ]
    }
  ],
  "tags": [
    "cotton",
    "slim"
  ],
  "price": 750,
  "salePrice": 600,
  "stock": 28,
  "rating": 4.4,
  "reviewCount": 44,
  "featured": false,
  "newArrival": false,
  "bestSeller": true,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-013",
  "name": "Embroidered A-Line Kurti",
  "slug": "embroidered-a-line-kurti",
  "description": "Embroidered A-Line Kurti \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Embroidered A-Line Kurti, made to layer easily into a daily rotation.",
  "brandId": "brand-kinfolk",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-kurti",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-013-img-1",
      "url": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=900",
      "alt": "Embroidered A-Line Kurti",
      "isPrimary": true
    },
    {
      "id": "prod-013-img-2",
      "url": "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=900&sat=-20",
      "alt": "Embroidered A-Line Kurti alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-013-var-1",
      "sku": "PROD-013-MAROON-S",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "s"
      },
      "price": 1590,
      "stock": 9
    },
    {
      "id": "prod-013-var-2",
      "sku": "PROD-013-MAROON-M",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "m"
      },
      "price": 1590,
      "stock": 10
    },
    {
      "id": "prod-013-var-3",
      "sku": "PROD-013-MAROON-L",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "l"
      },
      "price": 1590,
      "stock": 11
    },
    {
      "id": "prod-013-var-4",
      "sku": "PROD-013-MAROON-XL",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "xl"
      },
      "price": 1590,
      "stock": 12
    },
    {
      "id": "prod-013-var-5",
      "sku": "PROD-013-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 1590,
      "stock": 13
    },
    {
      "id": "prod-013-var-6",
      "sku": "PROD-013-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 1590,
      "stock": 8
    },
    {
      "id": "prod-013-var-7",
      "sku": "PROD-013-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 1590,
      "stock": 9
    },
    {
      "id": "prod-013-var-8",
      "sku": "PROD-013-NAVY-XL",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "xl"
      },
      "price": 1590,
      "stock": 10
    },
    {
      "id": "prod-013-var-9",
      "sku": "PROD-013-BEIGE-S",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "s"
      },
      "price": 1590,
      "stock": 11
    },
    {
      "id": "prod-013-var-10",
      "sku": "PROD-013-BEIGE-M",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "m"
      },
      "price": 1590,
      "stock": 12
    },
    {
      "id": "prod-013-var-11",
      "sku": "PROD-013-BEIGE-L",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "l"
      },
      "price": 1590,
      "stock": 13
    },
    {
      "id": "prod-013-var-12",
      "sku": "PROD-013-BEIGE-XL",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "xl"
      },
      "price": 1590,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "cotton",
    "regular"
  ],
  "price": 1590,
  "stock": 22,
  "rating": 4.6,
  "reviewCount": 47,
  "featured": true,
  "newArrival": false,
  "bestSeller": true,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-014",
  "name": "Printed Straight Kurti",
  "slug": "printed-straight-kurti",
  "description": "Printed Straight Kurti \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Printed Straight Kurti, made to layer easily into a daily rotation.",
  "brandId": "brand-maren",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-kurti",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-014-img-1",
      "url": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900",
      "alt": "Printed Straight Kurti",
      "isPrimary": true
    },
    {
      "id": "prod-014-img-2",
      "url": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&sat=-20",
      "alt": "Printed Straight Kurti alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-014-var-1",
      "sku": "PROD-014-WHITE-S",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "s"
      },
      "price": 1390,
      "stock": 9
    },
    {
      "id": "prod-014-var-2",
      "sku": "PROD-014-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 1390,
      "stock": 10
    },
    {
      "id": "prod-014-var-3",
      "sku": "PROD-014-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 1390,
      "stock": 11
    },
    {
      "id": "prod-014-var-4",
      "sku": "PROD-014-BEIGE-S",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "s"
      },
      "price": 1390,
      "stock": 12
    },
    {
      "id": "prod-014-var-5",
      "sku": "PROD-014-BEIGE-M",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "m"
      },
      "price": 1390,
      "stock": 13
    },
    {
      "id": "prod-014-var-6",
      "sku": "PROD-014-BEIGE-L",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "l"
      },
      "price": 1390,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-cotton"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "cotton",
    "regular"
  ],
  "price": 1390,
  "stock": 16,
  "rating": 4.9,
  "reviewCount": 50,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-015",
  "name": "Wrap Midi Dress",
  "slug": "wrap-midi-dress",
  "description": "Wrap Midi Dress \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Wrap Midi Dress, made to layer easily into a daily rotation.",
  "brandId": "brand-loom",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-dresses",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-015-img-1",
      "url": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900",
      "alt": "Wrap Midi Dress",
      "isPrimary": true
    },
    {
      "id": "prod-015-img-2",
      "url": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&sat=-20",
      "alt": "Wrap Midi Dress alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-015-var-1",
      "sku": "PROD-015-MAROON-S",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "s"
      },
      "price": 1990,
      "salePrice": 1590,
      "stock": 9
    },
    {
      "id": "prod-015-var-2",
      "sku": "PROD-015-MAROON-M",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "m"
      },
      "price": 1990,
      "salePrice": 1590,
      "stock": 10
    },
    {
      "id": "prod-015-var-3",
      "sku": "PROD-015-MAROON-L",
      "attributeValueMap": {
        "attr-color": "val-maroon",
        "attr-size": "l"
      },
      "price": 1990,
      "salePrice": 1590,
      "stock": 11
    },
    {
      "id": "prod-015-var-4",
      "sku": "PROD-015-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 1990,
      "salePrice": 1590,
      "stock": 12
    },
    {
      "id": "prod-015-var-5",
      "sku": "PROD-015-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 1990,
      "salePrice": 1590,
      "stock": 13
    },
    {
      "id": "prod-015-var-6",
      "sku": "PROD-015-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 1990,
      "salePrice": 1590,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-polyester"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "polyester",
    "regular"
  ],
  "price": 1990,
  "salePrice": 1590,
  "stock": 40,
  "rating": 3.8,
  "reviewCount": 53,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-016",
  "name": "Linen Shirt Dress",
  "slug": "linen-shirt-dress",
  "description": "Linen Shirt Dress \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Linen Shirt Dress, made to layer easily into a daily rotation.",
  "brandId": "brand-aiden",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-dresses",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-016-img-1",
      "url": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900",
      "alt": "Linen Shirt Dress",
      "isPrimary": true
    },
    {
      "id": "prod-016-img-2",
      "url": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&sat=-20",
      "alt": "Linen Shirt Dress alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-016-var-1",
      "sku": "PROD-016-BEIGE-S",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "s"
      },
      "price": 2190,
      "stock": 9
    },
    {
      "id": "prod-016-var-2",
      "sku": "PROD-016-BEIGE-M",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "m"
      },
      "price": 2190,
      "stock": 10
    },
    {
      "id": "prod-016-var-3",
      "sku": "PROD-016-BEIGE-L",
      "attributeValueMap": {
        "attr-color": "val-beige",
        "attr-size": "l"
      },
      "price": 2190,
      "stock": 11
    },
    {
      "id": "prod-016-var-4",
      "sku": "PROD-016-WHITE-S",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "s"
      },
      "price": 2190,
      "stock": 12
    },
    {
      "id": "prod-016-var-5",
      "sku": "PROD-016-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 2190,
      "stock": 13
    },
    {
      "id": "prod-016-var-6",
      "sku": "PROD-016-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 2190,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-linen"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "linen",
    "regular"
  ],
  "price": 2190,
  "stock": 34,
  "rating": 4.1,
  "reviewCount": 56,
  "featured": true,
  "newArrival": false,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-017",
  "name": "High-Rise Slim Jeans",
  "slug": "high-rise-slim-jeans",
  "description": "High-Rise Slim Jeans \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "High-Rise Slim Jeans, made to layer easily into a daily rotation.",
  "brandId": "brand-loom",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-jeans",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-017-img-1",
      "url": "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=900",
      "alt": "High-Rise Slim Jeans",
      "isPrimary": true
    },
    {
      "id": "prod-017-img-2",
      "url": "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=900&sat=-20",
      "alt": "High-Rise Slim Jeans alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-017-var-1",
      "sku": "PROD-017-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 2090,
      "stock": 9
    },
    {
      "id": "prod-017-var-2",
      "sku": "PROD-017-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 2090,
      "stock": 10
    },
    {
      "id": "prod-017-var-3",
      "sku": "PROD-017-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 2090,
      "stock": 11
    },
    {
      "id": "prod-017-var-4",
      "sku": "PROD-017-BLACK-S",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "s"
      },
      "price": 2090,
      "stock": 12
    },
    {
      "id": "prod-017-var-5",
      "sku": "PROD-017-BLACK-M",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "m"
      },
      "price": 2090,
      "stock": 13
    },
    {
      "id": "prod-017-var-6",
      "sku": "PROD-017-BLACK-L",
      "attributeValueMap": {
        "attr-color": "val-black",
        "attr-size": "l"
      },
      "price": 2090,
      "stock": 8
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-denim"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-slim"
      ]
    }
  ],
  "tags": [
    "denim",
    "slim"
  ],
  "price": 2090,
  "stock": 28,
  "rating": 4.4,
  "reviewCount": 59,
  "featured": false,
  "newArrival": false,
  "bestSeller": true,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-018",
  "name": "Wide Leg Denim",
  "slug": "wide-leg-denim",
  "description": "Wide Leg Denim \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Wide Leg Denim, made to layer easily into a daily rotation.",
  "brandId": "brand-maren",
  "categoryId": "cat-women",
  "subCategoryId": "cat-womens-jeans",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-018-img-1",
      "url": "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=900",
      "alt": "Wide Leg Denim",
      "isPrimary": true
    },
    {
      "id": "prod-018-img-2",
      "url": "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=900&sat=-20",
      "alt": "Wide Leg Denim alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-018-var-1",
      "sku": "PROD-018-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 9
    },
    {
      "id": "prod-018-var-2",
      "sku": "PROD-018-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 10
    },
    {
      "id": "prod-018-var-3",
      "sku": "PROD-018-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 2190,
      "salePrice": 1750,
      "stock": 11
    }
  ],
  "attributes": [
    {
      "attributeId": "attr-fabric",
      "valueIds": [
        "val-denim"
      ]
    },
    {
      "attributeId": "attr-fit",
      "valueIds": [
        "val-regular"
      ]
    }
  ],
  "tags": [
    "denim",
    "regular"
  ],
  "price": 2190,
  "salePrice": 1750,
  "stock": 22,
  "rating": 4.6,
  "reviewCount": 62,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-019",
  "name": "Kids Graphic Tee",
  "slug": "kids-graphic-tee",
  "description": "Kids Graphic Tee \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Kids Graphic Tee, made to layer easily into a daily rotation.",
  "brandId": "brand-verre",
  "categoryId": "cat-kids",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-019-img-1",
      "url": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900",
      "alt": "Kids Graphic Tee",
      "isPrimary": true
    },
    {
      "id": "prod-019-img-2",
      "url": "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=900&sat=-20",
      "alt": "Kids Graphic Tee alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-019-var-1",
      "sku": "PROD-019-WHITE-S",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "s"
      },
      "price": 590,
      "stock": 9
    },
    {
      "id": "prod-019-var-2",
      "sku": "PROD-019-WHITE-M",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "m"
      },
      "price": 590,
      "stock": 10
    },
    {
      "id": "prod-019-var-3",
      "sku": "PROD-019-WHITE-L",
      "attributeValueMap": {
        "attr-color": "val-white",
        "attr-size": "l"
      },
      "price": 590,
      "stock": 11
    },
    {
      "id": "prod-019-var-4",
      "sku": "PROD-019-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 590,
      "stock": 12
    },
    {
      "id": "prod-019-var-5",
      "sku": "PROD-019-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 590,
      "stock": 13
    },
    {
      "id": "prod-019-var-6",
      "sku": "PROD-019-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 590,
      "stock": 8
    },
    {
      "id": "prod-019-var-7",
      "sku": "PROD-019-OLIVE-S",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "s"
      },
      "price": 590,
      "stock": 9
    },
    {
      "id": "prod-019-var-8",
      "sku": "PROD-019-OLIVE-M",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "m"
      },
      "price": 590,
      "stock": 10
    },
    {
      "id": "prod-019-var-9",
      "sku": "PROD-019-OLIVE-L",
      "attributeValueMap": {
        "attr-color": "val-olive",
        "attr-size": "l"
      },
      "price": 590,
      "stock": 11
    }
  ],
  "attributes": [],
  "tags": [],
  "price": 590,
  "stock": 16,
  "rating": 4.9,
  "reviewCount": 65,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-020",
  "name": "Kids Fleece Hoodie",
  "slug": "kids-fleece-hoodie",
  "description": "Kids Fleece Hoodie \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Kids Fleece Hoodie, made to layer easily into a daily rotation.",
  "brandId": "brand-northline",
  "categoryId": "cat-kids",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-020-img-1",
      "url": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=900",
      "alt": "Kids Fleece Hoodie",
      "isPrimary": true
    },
    {
      "id": "prod-020-img-2",
      "url": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=900&sat=-20",
      "alt": "Kids Fleece Hoodie alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-020-var-1",
      "sku": "PROD-020-GREY-S",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "s"
      },
      "price": 990,
      "stock": 9
    },
    {
      "id": "prod-020-var-2",
      "sku": "PROD-020-GREY-M",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "m"
      },
      "price": 990,
      "stock": 10
    },
    {
      "id": "prod-020-var-3",
      "sku": "PROD-020-GREY-L",
      "attributeValueMap": {
        "attr-color": "val-grey",
        "attr-size": "l"
      },
      "price": 990,
      "stock": 11
    },
    {
      "id": "prod-020-var-4",
      "sku": "PROD-020-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 990,
      "stock": 12
    },
    {
      "id": "prod-020-var-5",
      "sku": "PROD-020-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 990,
      "stock": 13
    },
    {
      "id": "prod-020-var-6",
      "sku": "PROD-020-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 990,
      "stock": 8
    }
  ],
  "attributes": [],
  "tags": [],
  "price": 990,
  "stock": 40,
  "rating": 3.8,
  "reviewCount": 68,
  "featured": false,
  "newArrival": false,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-021",
  "name": "Kids Denim Overalls",
  "slug": "kids-denim-overalls",
  "description": "Kids Denim Overalls \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Kids Denim Overalls, made to layer easily into a daily rotation.",
  "brandId": "brand-loom",
  "categoryId": "cat-kids",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-021-img-1",
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900",
      "alt": "Kids Denim Overalls",
      "isPrimary": true
    },
    {
      "id": "prod-021-img-2",
      "url": "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=900&sat=-20",
      "alt": "Kids Denim Overalls alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-021-var-1",
      "sku": "PROD-021-NAVY-S",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "s"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 9
    },
    {
      "id": "prod-021-var-2",
      "sku": "PROD-021-NAVY-M",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "m"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 10
    },
    {
      "id": "prod-021-var-3",
      "sku": "PROD-021-NAVY-L",
      "attributeValueMap": {
        "attr-color": "val-navy",
        "attr-size": "l"
      },
      "price": 1290,
      "salePrice": 1030,
      "stock": 11
    }
  ],
  "attributes": [],
  "tags": [],
  "price": 1290,
  "salePrice": 1030,
  "stock": 34,
  "rating": 4.1,
  "reviewCount": 71,
  "featured": false,
  "newArrival": false,
  "bestSeller": true,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-022",
  "name": "Structured Leather Tote",
  "slug": "structured-leather-tote",
  "description": "Structured Leather Tote \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Structured Leather Tote, made to layer easily into a daily rotation.",
  "brandId": "brand-aiden",
  "categoryId": "cat-accessories",
  "subCategoryId": "cat-bags",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-022-img-1",
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
      "alt": "Structured Leather Tote",
      "isPrimary": true
    },
    {
      "id": "prod-022-img-2",
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&sat=-20",
      "alt": "Structured Leather Tote alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-022-var-1",
      "sku": "PROD-022-BLACK",
      "attributeValueMap": {
        "attr-color": "val-black"
      },
      "price": 2490,
      "stock": 11
    },
    {
      "id": "prod-022-var-2",
      "sku": "PROD-022-MAROON",
      "attributeValueMap": {
        "attr-color": "val-maroon"
      },
      "price": 2490,
      "stock": 12
    },
    {
      "id": "prod-022-var-3",
      "sku": "PROD-022-BEIGE",
      "attributeValueMap": {
        "attr-color": "val-beige"
      },
      "price": 2490,
      "stock": 13
    }
  ],
  "attributes": [],
  "tags": [],
  "price": 2490,
  "stock": 28,
  "rating": 4.4,
  "reviewCount": 74,
  "featured": true,
  "newArrival": false,
  "bestSeller": true,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-023",
  "name": "Canvas Everyday Backpack",
  "slug": "canvas-everyday-backpack",
  "description": "Canvas Everyday Backpack \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Canvas Everyday Backpack, made to layer easily into a daily rotation.",
  "brandId": "brand-verre",
  "categoryId": "cat-accessories",
  "subCategoryId": "cat-bags",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-023-img-1",
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
      "alt": "Canvas Everyday Backpack",
      "isPrimary": true
    },
    {
      "id": "prod-023-img-2",
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&sat=-20",
      "alt": "Canvas Everyday Backpack alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-023-var-1",
      "sku": "PROD-023-OLIVE",
      "attributeValueMap": {
        "attr-color": "val-olive"
      },
      "price": 1890,
      "stock": 11
    },
    {
      "id": "prod-023-var-2",
      "sku": "PROD-023-BLACK",
      "attributeValueMap": {
        "attr-color": "val-black"
      },
      "price": 1890,
      "stock": 12
    }
  ],
  "attributes": [],
  "tags": [],
  "price": 1890,
  "stock": 22,
  "rating": 4.6,
  "reviewCount": 77,
  "featured": false,
  "newArrival": true,
  "bestSeller": false,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
{
  "id": "prod-024",
  "name": "Reversible Leather Belt",
  "slug": "reversible-leather-belt",
  "description": "Reversible Leather Belt \u2014 considered materials, built for regular wear and easy care. Part of the core Verre lineup.",
  "shortDescription": "Reversible Leather Belt, made to layer easily into a daily rotation.",
  "brandId": "brand-northline",
  "categoryId": "cat-accessories",
  "subCategoryId": "cat-belts",
  "productType": "clothing",
  "images": [
    {
      "id": "prod-024-img-1",
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900",
      "alt": "Reversible Leather Belt",
      "isPrimary": true
    },
    {
      "id": "prod-024-img-2",
      "url": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&sat=-20",
      "alt": "Reversible Leather Belt alternate view"
    }
  ],
  "variants": [
    {
      "id": "prod-024-var-1",
      "sku": "PROD-024-BLACK",
      "attributeValueMap": {
        "attr-color": "val-black"
      },
      "price": 990,
      "salePrice": 790,
      "stock": 11
    },
    {
      "id": "prod-024-var-2",
      "sku": "PROD-024-MAROON",
      "attributeValueMap": {
        "attr-color": "val-maroon"
      },
      "price": 990,
      "salePrice": 790,
      "stock": 12
    }
  ],
  "attributes": [],
  "tags": [],
  "price": 990,
  "salePrice": 790,
  "stock": 16,
  "rating": 4.9,
  "reviewCount": 80,
  "featured": false,
  "newArrival": false,
  "bestSeller": false,
  "discountPercent": 20,
  "status": "active",
  "createdAt": "2026-06-01T00:00:00.000Z",
  "updatedAt": "2026-08-01T00:00:00.000Z"
},
];
