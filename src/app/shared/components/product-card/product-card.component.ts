import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardViewModel } from '../../../core/models/product.model';
import { RatingComponent } from '../rating/rating.component';
import { CartService } from '../../../core/services/cart.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { environment } from '../../../../environments/environment';

/**
 * The single reusable product tile used in New Arrivals, Best Sellers,
 * Trending, the /shop grid, related products, and wishlist. Takes a
 * lightweight ProductCardViewModel (see ProductService.toCardViewModel) so
 * it never needs to know how brand names or swatch data were resolved.
 */
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductCardViewModel;
  @Output() quickView = new EventEmitter<ProductCardViewModel>();

  readonly currencySymbol = environment.currencySymbol;

  constructor(private cartService: CartService, private wishlistService: WishlistService) {}

  get isWishlisted(): boolean {
    return this.wishlistService.isWishlisted(this.product.id);
  }

  toggleWishlist(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.wishlistService.toggle(this.product.id);
  }

  addToCart(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.addItem({
      id: `${this.product.id}-${Date.now()}`,
      productId: this.product.id,
      name: this.product.name,
      image: this.product.image,
      unitPrice: this.product.salePrice ?? this.product.price,
      quantity: 1,
    });
  }

  openQuickView(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.quickView.emit(this.product);
  }
}
