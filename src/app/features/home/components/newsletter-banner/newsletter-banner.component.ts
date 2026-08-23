import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-banner',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newsletter-banner.component.html',
  styleUrl: './newsletter-banner.component.scss',
})
export class NewsletterBannerComponent {
  email = '';
  readonly submitted = signal(false);

  onSubmit(): void {
    if (!this.email) return;
    // Phase 8 / API integration: POST to NewsletterService once the backend exists.
    this.submitted.set(true);
  }
}
