import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe({
      next: (response) => {
        this.products = response;
      },
    })
  }
}
