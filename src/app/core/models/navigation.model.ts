/**
 * Data-driven navigation. The header/mega-menu components render whatever
 * this config contains — swapping from a clothing nav to a perfume or
 * watch nav is a config change, not a component change.
 */

export interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

export interface MegaMenuLink {
  label: string;
  routerLink: string;
  queryParams?: Record<string, string>;
  badge?: string; // e.g. "New"
}

export interface NavItem {
  label: string;
  routerLink?: string;
  queryParams?: Record<string, string>;
  /** If present, hovering/clicking opens a mega menu instead of navigating directly */
  megaMenu?: {
    columns: MegaMenuColumn[];
    featuredImage?: { url: string; alt: string; routerLink: string; caption: string };
  };
  highlight?: boolean; // e.g. "Offers" shown in accent color
}

export interface TopBarMessage {
  icon: string; // bootstrap-icons class
  text: string;
}
