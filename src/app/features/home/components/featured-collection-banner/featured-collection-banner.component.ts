import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-collection-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-collection-banner.component.html',
  styleUrl: './featured-collection-banner.component.scss',
})
export class FeaturedCollectionBannerComponent {}
