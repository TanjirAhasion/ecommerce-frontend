import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../../core/services/brand.service';
import { Brand } from '../../../../core/models/product.model';

@Component({
  selector: 'app-brand-strip',
  standalone: true,
  templateUrl: './brand-strip.component.html',
  styleUrl: './brand-strip.component.scss',
})
export class BrandStripComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.brandService.getAll().subscribe((brands) => (this.brands = brands));
  }
}
