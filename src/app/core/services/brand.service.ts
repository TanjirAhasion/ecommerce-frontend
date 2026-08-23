import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Brand } from '../models/product.model';
import { BRANDS } from '../mock-data/brands.mock';

@Injectable({ providedIn: 'root' })
export class BrandService {
  getAll(): Observable<Brand[]> {
    return of(BRANDS);
  }

  getById(id: string): Observable<Brand | undefined> {
    return of(BRANDS.find((b) => b.id === id));
  }

  getBySlug(slug: string): Observable<Brand | undefined> {
    return of(BRANDS.find((b) => b.slug === slug));
  }
}
