import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../../../core/services/testimonial.service';
import { Testimonial } from '../../../../core/mock-data/testimonials.mock';
import { RatingComponent } from '../../../../shared/components/rating/rating.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit(): void {
    this.testimonialService.getAll().subscribe((t) => (this.testimonials = t));
  }
}
