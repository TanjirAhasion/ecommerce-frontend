import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface OfferCard {
  title: string;
  subtitle: string;
  routerLink: string;
  queryParams?: Record<string, string>;
  tone: 'ink' | 'accent' | 'olive';
}

@Component({
  selector: 'app-special-offers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './special-offers.component.html',
  styleUrl: './special-offers.component.scss',
})
export class SpecialOffersComponent {
  readonly offers: OfferCard[] = [
    { title: 'Up to 40% Off', subtitle: 'End of season sale', routerLink: '/shop', queryParams: { filter: 'sale' }, tone: 'accent' },
    { title: 'Buy 2 Get 1 Free', subtitle: 'On selected t-shirts', routerLink: '/category/mens-t-shirts', tone: 'ink' },
    { title: 'Free Delivery', subtitle: 'On orders over ৳2,000', routerLink: '/pages/shipping', tone: 'olive' },
  ];
}
