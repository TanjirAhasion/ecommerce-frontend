import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Product, ProductAttribute, ProductCardViewModel } from '../models/product.model';
import { PRODUCTS } from '../mock-data/products.mock';
import { ATTRIBUTES } from '../mock-data/attributes.mock';
import { BrandService } from './brand.service';

/**
 * ProductService is the ONLY thing home/catalog/PDP components talk to.
 * Today it resolves from static mock data behind a small artificial delay
 * (so loading states are visible); once a real API exists, every method
 * body below becomes an `this.http.get<Product[]>(...)` call against
 * `environment.apiUrl` and every caller is unaffected because the public
 * method signatures (Observable<Product[]>, Observable<Product | undefined>)
 * don't change.
 */
@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private brandService: BrandService) {}

  private readonly mockLatencyMs = environment.useMockData ? 250 : 0;

  getAll(): Observable<Product[]> {
    return of(PRODUCTS).pipe(delay(this.mockLatencyMs));
  }

  getBySlug(slug: string): Observable<Product | undefined> {
    return of(PRODUCTS.find((p) => p.slug === slug)).pipe(delay(this.mockLatencyMs));
  }

  getByCategorySlug(categorySlugOrId: string): Observable<Product[]> {
    return of(
      PRODUCTS.filter((p) => p.categoryId === categorySlugOrId || p.subCategoryId === categorySlugOrId)
    ).pipe(delay(this.mockLatencyMs));
  }

  getFeatured(limit = 8): Observable<Product[]> {
    return of(PRODUCTS.filter((p) => p.featured).slice(0, limit)).pipe(delay(this.mockLatencyMs));
  }

  getNewArrivals(limit = 8): Observable<Product[]> {
    return of(PRODUCTS.filter((p) => p.newArrival).slice(0, limit)).pipe(delay(this.mockLatencyMs));
  }

  getBestSellers(limit = 8): Observable<Product[]> {
    return of(PRODUCTS.filter((p) => p.bestSeller).slice(0, limit)).pipe(delay(this.mockLatencyMs));
  }

  /** "Trending" has no dedicated flag in the model — it's a derived view (highest rated * review volume). */
  getTrending(limit = 8): Observable<Product[]> {
    return of(
      [...PRODUCTS]
        .sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount)
        .slice(0, limit)
    ).pipe(delay(this.mockLatencyMs));
  }

  getAttributes(): ProductAttribute[] {
    return ATTRIBUTES;
  }

  /**
   * Maps a full Product to the lightweight shape ProductCardComponent needs,
   * resolving the brand name so cards never do their own lookups.
   */
  toCardViewModel(product: Product): Observable<ProductCardViewModel> {
    return this.brandService.getById(product.brandId).pipe(
      map((brand) => {
        const colorAttrId = 'attr-color';
        const sizeAttrId = 'attr-size';
        const colorValueIds = new Set(
          product.variants.map((v) => v.attributeValueMap[colorAttrId]).filter(Boolean)
        );
        const sizeValueIds = new Set(
          product.variants.map((v) => v.attributeValueMap[sizeAttrId]).filter(Boolean)
        );
        const colorAttr = ATTRIBUTES.find((a) => a.id === colorAttrId);
        const sizeAttr = ATTRIBUTES.find((a) => a.id === sizeAttrId);

        return {
          id: product.id,
          slug: product.slug,
          name: product.name,
          brandName: brand?.name ?? '',
          image: product.images[0]?.url ?? '',
          hoverImage: product.images[1]?.url,
          price: product.price,
          salePrice: product.salePrice,
          discountPercent: product.discountPercent,
          rating: product.rating,
          reviewCount: product.reviewCount,
          isNew: product.newArrival,
          isBestSeller: product.bestSeller,
          colorSwatches: colorAttr?.values
            .filter((v) => colorValueIds.has(v.id.replace('val-', '')) || colorValueIds.has(v.id))
            .map((v) => ({ label: v.label, colorHex: v.colorHex ?? '#ccc' })),
          sizes: sizeAttr?.values
            .filter((v) => sizeValueIds.has(v.value) || sizeValueIds.has(v.id))
            .map((v) => v.label),
        };
      })
    );
  }
}
