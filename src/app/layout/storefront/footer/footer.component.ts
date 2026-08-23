import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterColumn {
  heading: string;
  links: { label: string; routerLink: string }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly columns: FooterColumn[] = [
    {
      heading: 'Shop',
      links: [
        { label: 'Men', routerLink: '/category/men' },
        { label: 'Women', routerLink: '/category/women' },
        { label: 'Kids', routerLink: '/category/kids' },
        { label: 'Accessories', routerLink: '/category/accessories' },
      ],
    },
    {
      heading: 'Help',
      links: [
        { label: 'Track Order', routerLink: '/account/orders' },
        { label: 'Returns', routerLink: '/pages/returns' },
        { label: 'Shipping Info', routerLink: '/pages/shipping' },
        { label: 'Contact Us', routerLink: '/pages/contact' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Verre', routerLink: '/pages/about' },
        { label: 'Privacy Policy', routerLink: '/pages/privacy' },
        { label: 'Terms of Service', routerLink: '/pages/terms' },
      ],
    },
  ];

  readonly currentYear = new Date().getFullYear();
}
