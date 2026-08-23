import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly _productIds = signal<Set<string>>(new Set());

  readonly wishlistCount = computed(() => this._productIds().size);

  isWishlisted(productId: string): boolean {
    return this._productIds().has(productId);
  }

  toggle(productId: string): void {
    this._productIds.update((set) => {
      const next = new Set(set);
      next.has(productId) ? next.delete(productId) : next.add(productId);
      return next;
    });
  }
}
