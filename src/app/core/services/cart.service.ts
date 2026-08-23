import { Injectable, computed, signal } from '@angular/core';

export interface CartLine {
  id: string;
  productId: string;
  variantId?: string;
  name: string;
  variantLabel?: string;
  image: string;
  unitPrice: number;
  quantity: number;
}

/**
 * Cart state lives here as Angular signals, not NgRx — this app is small
 * enough that a focused service is simpler to reason about. When a real
 * API is introduced, only the methods below need to start awaiting HTTP
 * calls; consumers reading the signals are unaffected.
 */
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _lines = signal<CartLine[]>([]);

  readonly lines = this._lines.asReadonly();
  readonly cartCount = computed(() => this._lines().reduce((sum, l) => sum + l.quantity, 0));
  readonly cartSubtotal = computed(() =>
    this._lines().reduce((sum, l) => sum + l.unitPrice * l.quantity, 0)
  );

  addItem(line: CartLine): void {
    const existing = this._lines().find(
      (l) => l.productId === line.productId && l.variantId === line.variantId
    );
    if (existing) {
      this.updateQuantity(existing.id, existing.quantity + line.quantity);
      return;
    }
    this._lines.update((lines) => [...lines, line]);
  }

  updateQuantity(lineId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(lineId);
      return;
    }
    this._lines.update((lines) => lines.map((l) => (l.id === lineId ? { ...l, quantity } : l)));
  }

  removeItem(lineId: string): void {
    this._lines.update((lines) => lines.filter((l) => l.id !== lineId));
  }

  clear(): void {
    this._lines.set([]);
  }
}
