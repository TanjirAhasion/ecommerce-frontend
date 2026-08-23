import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationService } from '../../../core/services/navigation.service';
import { CartService } from '../../../core/services/cart.service';
import { WishlistService } from '../../../core/services/wishlist.service';
import { NavItem } from '../../../core/models/navigation.model';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MegaMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // inject() rather than constructor params so these can be used in the
  // same-class field initializers below (constructor-param properties
  // aren't assigned until after field initializers run).
  private navigationService = inject(NavigationService);
  private cartService = inject(CartService);
  private wishlistService = inject(WishlistService);

  readonly navItems: NavItem[] = this.navigationService.getMainNav();
  readonly topBarMessages = this.navigationService.getTopBarMessages();

  /** Index of the currently open mega menu, or null when none is open. */
  readonly activeMenuIndex = signal<number | null>(null);
  readonly mobileMenuOpen = signal(false);
  readonly searchFocused = signal(false);
  readonly searchQuery = signal('');

  readonly cartCount = this.cartService.cartCount;
  readonly wishlistCount = this.wishlistService.wishlistCount;

  // Illustrative "recent/popular searches" for the search UX (Section 42);
  // wired to a real SearchService once catalog search lands in Phase 3.
  readonly popularSearches = ['Oversized Tee', 'Denim Jacket', 'Kurti', 'Joggers'];

  openMenu(index: number): void {
    this.activeMenuIndex.set(index);
  }

  closeMenu(): void {
    this.activeMenuIndex.set(null);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
    this.mobileMenuOpen.set(false);
  }
}
