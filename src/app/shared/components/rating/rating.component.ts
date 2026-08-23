import { Component, Input, computed, signal } from '@angular/core';

/**
 * Reusable star rating display. Purely presentational — pass a 0-5 value
 * and optional review count. Used in ProductCardComponent, PDP, reviews.
 */
@Component({
  selector: 'app-rating',
  standalone: true,
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  @Input({ required: true }) set value(v: number) {
    this._value.set(v);
  }
  @Input() reviewCount?: number;
  @Input() size: 'sm' | 'md' = 'sm';

  private _value = signal(0);
  readonly stars = computed(() => {
    const v = Math.round(this._value() * 2) / 2; // nearest half star
    return Array.from({ length: 5 }, (_, i) => {
      const diff = v - i;
      if (diff >= 1) return 'full';
      if (diff >= 0.5) return 'half';
      return 'empty';
    });
  });
}
