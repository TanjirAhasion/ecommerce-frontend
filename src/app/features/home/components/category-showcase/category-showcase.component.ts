import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../../core/services/category.service';
import { Category } from '../../../../core/models/product.model';

@Component({
  selector: 'app-category-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-showcase.component.html',
  styleUrl: './category-showcase.component.scss',
})
export class CategoryShowcaseComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getTopLevel().subscribe((categories) => (this.categories = categories));
  }
}
