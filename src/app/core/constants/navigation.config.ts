import { NavItem, TopBarMessage } from '../models/navigation.model';

/**
 * CLOTHING VERTICAL NAV CONFIG
 * ----------------------------
 * To reuse this frontend for perfume, watches, shoes, etc., duplicate this
 * file (e.g. navigation.perfume.config.ts) with new labels/links and swap
 * the import in NavigationService. No component changes required.
 */
export const MAIN_NAV: NavItem[] = [
  { label: 'Home', routerLink: '/' },
  { label: 'Shop', routerLink: '/shop' },
  {
    label: 'Men',
    routerLink: '/category/men',
    megaMenu: {
      columns: [
        {
          heading: 'Topwear',
          links: [
            { label: 'T-Shirts', routerLink: '/category/mens-t-shirts' },
            { label: 'Shirts', routerLink: '/category/mens-shirts' },
            { label: 'Polo', routerLink: '/category/mens-polo' },
            { label: 'Hoodies', routerLink: '/category/mens-hoodies' },
            { label: 'Jackets', routerLink: '/category/mens-jackets' },
          ],
        },
        {
          heading: 'Bottomwear',
          links: [
            { label: 'Jeans', routerLink: '/category/mens-jeans' },
            { label: 'Trousers', routerLink: '/category/mens-trousers' },
            { label: 'Joggers', routerLink: '/category/mens-joggers' },
          ],
        },
        {
          heading: 'Traditional',
          links: [{ label: 'Panjabi', routerLink: '/category/mens-panjabi' }],
        },
      ],
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600',
        alt: 'New season menswear',
        routerLink: '/category/men',
        caption: 'New Season Essentials',
      },
    },
  },
  {
    label: 'Women',
    routerLink: '/category/women',
    megaMenu: {
      columns: [
        {
          heading: 'Topwear',
          links: [
            { label: 'Tops', routerLink: '/category/womens-tops' },
            { label: 'T-Shirts', routerLink: '/category/womens-t-shirts' },
            { label: 'Kurti', routerLink: '/category/womens-kurti' },
          ],
        },
        {
          heading: 'Dresses & Sets',
          links: [
            { label: 'Dresses', routerLink: '/category/womens-dresses' },
            { label: 'Co-ords', routerLink: '/category/womens-co-ords' },
          ],
        },
        {
          heading: 'Bottomwear',
          links: [
            { label: 'Trousers', routerLink: '/category/womens-trousers' },
            { label: 'Jeans', routerLink: '/category/womens-jeans' },
          ],
        },
      ],
      featuredImage: {
        url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600',
        alt: 'New season womenswear',
        routerLink: '/category/women',
        caption: 'The Edit: New Arrivals',
      },
    },
  },
  {
    label: 'Kids',
    routerLink: '/category/kids',
    megaMenu: {
      columns: [
        { heading: 'Boys', links: [{ label: 'Shop Boys', routerLink: '/category/kids-boys' }] },
        { heading: 'Girls', links: [{ label: 'Shop Girls', routerLink: '/category/kids-girls' }] },
      ],
    },
  },
  {
    label: 'Accessories',
    routerLink: '/category/accessories',
    megaMenu: {
      columns: [
        {
          heading: 'Carry & Wear',
          links: [
            { label: 'Bags', routerLink: '/category/bags' },
            { label: 'Wallets', routerLink: '/category/wallets' },
            { label: 'Belts', routerLink: '/category/belts' },
            { label: 'Caps', routerLink: '/category/caps' },
          ],
        },
      ],
    },
  },
  { label: 'New Arrivals', routerLink: '/shop', queryParams: { filter: 'new' } },
  { label: 'Best Sellers', routerLink: '/shop', queryParams: { filter: 'best-seller' } },
  { label: 'Offers', routerLink: '/shop', queryParams: { filter: 'sale' }, highlight: true },
];

export const TOP_BAR_MESSAGES: TopBarMessage[] = [
  { icon: 'bi-truck', text: 'Free delivery on orders over ৳2,000' },
  { icon: 'bi-arrow-repeat', text: 'Easy 7-day returns' },
  { icon: 'bi-shield-check', text: 'Secure payment' },
  { icon: 'bi-headset', text: '24/7 customer support' },
];
