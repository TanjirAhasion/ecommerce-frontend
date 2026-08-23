import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItem } from '../../../core/models/navigation.model';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss',
})
export class MegaMenuComponent {
  /**
   * This component knows nothing about "Men's Jackets" vs "Eau de Parfum" —
   * it only knows how to lay out columns of links and an optional featured
   * image. All content comes from NavItem.megaMenu (see navigation.config.ts),
   * so re-skinning for a new vertical never touches this file.
   */
  @Input({ required: true }) menu!: NonNullable<NavItem['megaMenu']>;
  @Output() closeRequested = new EventEmitter<void>();
}
