import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { ProductService } from '../../core/services/product.service';
import { Product, ProductCardViewModel } from '../../core/models/product.model';

import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { CategoryShowcaseComponent } from './components/category-showcase/category-showcase.component';
import { ProductRailComponent } from './components/product-rail/product-rail.component';
import { FeaturedCollectionBannerComponent } from './components/featured-collection-banner/featured-collection-banner.component';
import { SpecialOffersComponent } from './components/special-offers/special-offers.component';
import { BrandStripComponent } from './components/brand-strip/brand-strip.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsletterBannerComponent } from './components/newsletter-banner/newsletter-banner.component';

/**
 * Home page for Phase 2. Uses forkJoin + switchMap to resolve each product
 * list to card view models in parallel (per the established pattern from
 * the architecture doc), keeping HomeComponent itself thin — all layout
 * lives in the section components below.
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroBannerComponent,
    CategoryShowcaseComponent,
    ProductRailComponent,
    FeaturedCollectionBannerComponent,
    SpecialOffersComponent,
    BrandStripComponent,
    TestimonialsComponent,
    NewsletterBannerComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  newArrivals: ProductCardViewModel[] = [];
  bestSellers: ProductCardViewModel[] = [];
  trending: ProductCardViewModel[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadRail(this.productService.getNewArrivals(8), (r) => (this.newArrivals = r));
    this.loadRail(this.productService.getBestSellers(8), (r) => (this.bestSellers = r));
    this.loadRail(this.productService.getTrending(8), (r) => (this.trending = r));
  }

  /** Resolves each Product in a list to its card view model in parallel. */
  private loadRail(
    products$: Observable<Product[]>,
    assign: (result: ProductCardViewModel[]) => void
  ): void {
    products$
      .pipe(
        switchMap((products) =>
          products.length ? forkJoin(products.map((p) => this.productService.toCardViewModel(p))) : forkJoin([])
        )
      )
      .subscribe((result) => assign(result));
  }
}
