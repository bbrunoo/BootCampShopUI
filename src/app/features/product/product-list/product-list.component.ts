import { Product } from './../../models/product.model';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe({
        next: (response) => {
          this.products = response;
        },
        error: console.error
      })
  }
  deleteProd(product: Product) {
    this.productService.delProducts(product).subscribe((response) => {
      console.log("Deletando produto", response);
      this.ngOnInit();
    },
      error => {
        console.log("Erro ao deletar produto: ", error);
      }
    );
  }

}
