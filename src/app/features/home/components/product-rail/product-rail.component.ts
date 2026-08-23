import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardViewModel } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

/**
 * Generic horizontally-scrollable product rail. Reused for New Arrivals,
 * Best Sellers, and Trending Products on the home page — only the title,
 * products, and "view all" link change between usages.
 */
@Component({
  selector: 'app-product-rail',
  standalone: true,
  imports: [RouterLink, ProductCardComponent],
  templateUrl: './product-rail.component.html',
  styleUrl: './product-rail.component.scss',
})
export class ProductRailComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
  @Input({ required: true }) products: ProductCardViewModel[] = [];
  @Input() viewAllLink = '/shop';
  @Input() viewAllQueryParams?: Record<string, string>;

  @ViewChild('track') track?: ElementRef<HTMLDivElement>;

  scroll(direction: 'prev' | 'next'): void {
    const el = this.track?.nativeElement;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (direction === 'next' ? 1 : -1);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  }
}
