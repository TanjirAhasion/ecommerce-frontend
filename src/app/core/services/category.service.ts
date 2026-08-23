import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/product.model';
import { CATEGORIES } from '../mock-data/categories.mock';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  /** Top-level categories only — used for "Shop By Category" cards and the mega menu roots. */
  getTopLevel(): Observable<Category[]> {
    return of(CATEGORIES.filter((c) => c.parentId === null).sort((a, b) => a.sortOrder - b.sortOrder));
  }

  getAll(): Observable<Category[]> {
    return of(CATEGORIES);
  }

  getBySlug(slug: string): Observable<Category | undefined> {
    return of(CATEGORIES.find((c) => c.slug === slug));
  }

  getChildren(parentId: string): Observable<Category[]> {
    return of(CATEGORIES.filter((c) => c.parentId === parentId));
  }
}
