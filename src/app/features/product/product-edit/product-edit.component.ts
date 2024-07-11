import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private routeGo: Router) { }

  productId!: string;
  product: Product = {name: '', description: '', price: 0};
  
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductsById(this.productId).subscribe((prod: Product) => {
      console.log(prod)
      this.product = prod
    });
  }

  updateProduct() {
    this.productService.editProduct(this.productId, this.product).subscribe(
      response => {
        console.log(this.product)
        alert("Product edited successfully")
        console.log('Product edited successfully', response)
        this.routeGo.navigate(['/admin/products']);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

  isFormComplete(): boolean {
    return this.product.name !== "" && this.product.description !== "" && this.product.price !== null;
  }
}
