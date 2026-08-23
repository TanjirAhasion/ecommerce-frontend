import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial, TESTIMONIALS } from '../mock-data/testimonials.mock';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  getAll(): Observable<Testimonial[]> {
    return of(TESTIMONIALS);
  }
}
